require 'yaml'

module Sass::Script::Functions
  def random-background(filename, variable)
    config_file = '_data/' + filename + '.yml'
    obj = YAML.load_file(config_file)
    return Sass::Script::Value::String.new(obj.map{|x| x["filename"]}.sample)
  end
end
