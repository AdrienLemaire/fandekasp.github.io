require "rubygems"
require "tmpdir"

require "bundler/setup"
require "jekyll"


GITHUB_REPONAME = "Fandekasp/fandekasp.github.io"

desc "Generate blog files"
task :generate do
  system "perl -i -p -e 's/env: testing/env: production/g;' _config.yml"
  Jekyll::Site.new(Jekyll.configuration({
    "source"      => ".",
    "destination" => "_site"
  })).process
  system "perl -i -p -e 's/env: production/env: testing/g;' _config.yml"

  # Leverage browser caching through Cloudflare
  system "wget https://connect.facebook.net/en_US/sdk.js -O _assets/javascripts/author/sdk.js"
  system "wget https://apis.google.com/js/plusone.js -O _assets/javascripts/author/plusone.js"
  system "wget https://platform.twitter.com/widgets.js -O _assets/javascripts/author/widgets.js"
  system "wget https://www.redditstatic.com/button/button1.js -O _assets/javascripts/author/button1.js"

  #system "bundle exec rake optimizeimages"
end


desc "Generate and publish blog to gh-pages"
task :publish => [:generate] do
  Dir.mktmpdir do |tmp|
    cp_r "_site/.", tmp

    pwd = Dir.pwd
    Dir.chdir tmp

    system "git init"
    system "git add ."
    message = "Site updated at #{Time.now.utc}"
    system "jpegoptim --strip-all --totals -o _site/images/galleries/*-thumb*"
    system "git commit -m #{message.inspect}"
    system "git remote add origin git@github.com:#{GITHUB_REPONAME}.git"
    system "git push origin master --force"
    #system "bundle exec rake notify"

    Dir.chdir pwd
  end
end

#def resize name, w, h
    #sh %{mogrify -resize #{MAX_GEOMETRY[:w]}x#{MAX_GEOMETRY[:h]} '#{name}'}
#end

#MAX_GEOMETRY = { w: 1280.0, h: 960.0 }
#namespace :jpeg do

    #task :list do
      #@jpgs = Dir.glob("**/*.jpg") - Dir.glob("_site/**/*.jpg")
    #end

    #desc "Scale down images to max geometry allowed"
    #task :resize => :list do
      #files= { }

      #@jpgs.each do |jpg|
        #IO.popen "identify '#{jpg}'" do |p|
          #f = p.read
          #name,bla,size = f.split(/ /)
          #name.sub!(/jpg\[\d+\]$/, 'jpg')
          #w,h = size.split('x').map(&:to_i)
          #next unless name && w && h
          #resize(name, w, h) if w > MAX_GEOMETRY[:w] || h > MAX_GEOMETRY[:h]
        #end
      #end
    #end

#desc "Compress JPEG images"
    #task :minimize => :list do
      #@jpgs.each do |f|
        #sh "jpegoptim --strip-all --totals -o '#{f}'"
      #end
#end

#namespace :png do

#desc "Compress PNG images"
#task :minimize => :list do
  #@pngs.each do |png|
    #before = File.size png
    #sh "./bin/pngout #{png} -q | true"
    #puts "#{png} : #{before - File.size(png)} bytes smaller "
  #end


##############
# Optimizes  #
##############

# https://github.com/phobetron/image-optimizer 
# Using this to optimize our images. Dependencies are jpegtran, pngcrush and gifsicle

desc "Optimize GIF, JPG and PNG files"
task :optimizeimages => [ 'optimizeimages:find_tools', 'optimizeimages:run' ]

namespace :optimizeimages do
  desc "Test for presence of image optimization tools in the command path"
  task :find_tools do
    RakeFileUtils.verbose(false)
    tools = %w[jpegtran gifsicle pngcrush]
    puts "\nOptimizing images using the following tools:"
    tools.delete_if { |tool| sh('which', tool) rescue false }
    raise "The following tools must be installed and accessible from the execution path: #{ tools.join(', ') }" if tools.size > 0
  end

  task :run do
    STDOUT.sync = true
    RakeFileUtils.verbose(true)
    start_time = Time.now

    file_list = FileList.new '_assets/**/*.{gif,jpeg,jpg,png}'
    puts file_list

    last_optimized_path = '_assets/.last_optimized'
    if File.exists? last_optimized_path
      last_optimized = File.new last_optimized_path
      file_list.exclude do |f|
        File.new(f).mtime < last_optimized.mtime
      end
    end

    puts "\nOptimizing #{ file_list.size } image files."

    proc_cnt = 0
    skip_cnt = 0
    savings = {:old => Array.new, :new => Array.new}

    file_list.each_with_index do |f, cnt|
      puts "Processing: #{cnt+1}/#{file_list.size} #{f.to_s}"

      extension = File.extname(f).delete('.').gsub(/jpeg/,'jpg')
      ext_check = `file -b #{f} | awk '{print $1}'`.strip.downcase
      ext_check.gsub!(/jpeg/,'jpg')
      if ext_check != extension
        puts "\t#{f.to_s} is a: '#{ext_check}' not: '#{extension}' ..skipping"
        skip_cnt = skip_cnt + 1
        next
      end

      case extension
      when 'gif'
        `gifsicle -O2 #{f} > #{f}.n`
      when 'png'
        `pngcrush -q -rem alla -reduce -brute  #{f} #{f}.n`
      when 'jpg'
        `jpegtran -copy none -optimize -perfect -progressive #{f} > #{f}.p`
        prog_size = File.size?("#{f}.p")

        `jpegtran -copy none -optimize -perfect #{f} > #{f}.np`
        nonprog_size = File.size?("#{f}.np")

        if prog_size < nonprog_size
          File.delete("#{f}.np")
          File.rename("#{f}.p", "#{f}.n")
        else
          File.delete("#{f}.p")
          File.rename("#{f}.np", "#{f}.n")
        end
      else
        skip_cnt = skip_cnt + 1
        next
      end

      old_size = File.size?(f).to_f
      new_size = File.size?("#{f}.n").to_f

      if new_size < old_size
        File.delete(f)
        File.rename("#{f}.n", f)
      else
        new_size = old_size
        File.delete("#{f}.n")
      end

      savings[:old] << old_size
      savings[:new] << new_size

      reduction = 100.0 - (new_size/old_size*100.0)

      puts "Output: #{sprintf "%0.2f", reduction}% | #{old_size.to_i} -> #{new_size.to_i}"
      proc_cnt = proc_cnt + 1
    end

    total_old = savings[:old].inject(0){|sum,item| sum + item}
    total_new = savings[:new].inject(0){|sum,item| sum + item}
    total_reduction = total_old > 0 ? (100.0 - (total_new/total_old*100.0)) : 0

    minutes, seconds = (Time.now - start_time).divmod 60
    puts "\nTotal run time: #{minutes}m #{seconds.round}s"

    puts "Files: #{file_list.size}\tProcessed: #{proc_cnt}\tSkipped: #{skip_cnt}"
    puts "\nTotal savings:\t#{sprintf "%0.2f", total_reduction}% | #{total_old.to_i} -> #{total_new.to_i} (#{total_old.to_i - total_new.to_i})"

    FileUtils.touch last_optimized_path
  end
end


##############
#   Notify   #
##############

# Ping Google and Yahoo to let them know you updated your site

site = "adrien.is"

desc 'Notify Google of the new sitemap'
task :sitemapgoogle do
  begin
    require 'net/http'
    require 'uri'
    puts '* Pinging Google about our sitemap'
    Net::HTTP.get('www.google.com', '/webmasters/tools/ping?sitemap=' + URI.escape('#{site}/sitemap.xml'))
  rescue LoadError
    puts '! Could not ping Google about our sitemap, because Net::HTTP or URI could not be found.'
  end
end

desc 'Notify Bing of the new sitemap'
task :sitemapbing do
  begin
    require 'net/http'
    require 'uri'
    puts '* Pinging Bing about our sitemap'
    Net::HTTP.get('www.bing.com', '/webmaster/ping.aspx?siteMap=' + URI.escape('#{site}/sitemap.xml'))
  rescue LoadError
    puts '! Could not ping Bing about our sitemap, because Net::HTTP or URI could not be found.'
  end
end

desc "Notify various services about new content"
task :notify => [:sitemapgoogle, :sitemapbing] do
end
