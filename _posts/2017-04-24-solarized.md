---
layout: post
title:  "Solarized Theme"
date:   2017-04-24 17:20:00 +0900
categories: solarized archlinux i3 termite tmux zsh vim
---

In this post, I will go over my configuration to set the Solarized light/dark
themes in linux. In addition, I'll share my tricks to easily toggle between these
2 themes across all applications.

Below are the applications I will refer to:

* [Arch Linux](https://www.archlinux.org/): Lightweight rolling-release Linux distribution.
* [I3](https://i3wm.org/): Tiling window manager.
* [Termite](https://github.com/thestinger/termite): Keyboard-centric VTE-based
  terminal.
* [Tmux](https://tmux.github.io/): Terminal multiplexer to easily switch between
  programs in a single terminal.
* [NeoVim](https://github.com/neovim/neovim): Vim fork, text editor.

# [](#solarized)Solarized

> [Solarized](http://ethanschoonover.com/solarized) is a color palette designed to
> be very readable in both light and dark modes, using only 16 colors. The
> colors were chosen from the CIELAB color space, which smartly arranges colors
> visible to the human eye.

![solarized palette](/assets/images/solarized-palette.png)

There are many other interesting color schemes out there, like
[gruvbox](https://github.com/morhetz/gruvbox), but I won't discuss the
differences between each palette in this article.

I have been using Solarized for several years now. A recurrent issue when 
setting up my system is to homogeneize colors across applications).

While it would be nice to see applications reuse default colors, they
unfortunately define their own set of colors, and we therefore need to copy the
solarized color palette in each of these configuration files.

Imagine you are running Vim within Tmux, both setup with solarized dark colors,
and want to switch to the light theme because you're working outside or near a
window around noon. You might already have a vim binding allowing you to toggle
the colorscheme mode within your current session, but then you'll be struck by
the high contrast between the tmux dark colors shown in other panes and the vim
light colors in your current pane. Moreover, if you'd like to reopen a new vim
session, you'll be back to the default theme, which is rather annoying.

![Solarized contrast in Vim and
Tmux](/assets/images/2017-04-24-solarized/solarized_vim_tmux_contrast.png)

Here's how I smoothly transition between light and dark mode for all applications using a shortcut.


# [](#xresources)Xresources

> **Xresources** is a user-level configuration dotfile, used to set X resources
> used by X client applications.

I truly wish applications would comply entirely to the colors specified in the
Xresources so that we wouldn't need to configure our palette in so many
different places.

Therefore, I went and create 2 files, called `~/.Xresources-light`
and `~/.Xresources-dark` files, then symlinked the current theme to
`~/.Xresources`.

Example for `~/.Xresources-dark`:

```dotfile
! Solarized theme
! Common
#define S_yellow        #b58900
#define S_orange        #cb4b16
#define S_red           #dc322f
#define S_magenta       #d33682
#define S_violet        #6c71c4
#define S_blue          #268bd2
#define S_cyan          #2aa198
#define S_green         #859900

! Dark
#define S_base03        #002b36
#define S_base02        #073642
#define S_base01        #586e75
#define S_base00        #657b83
#define S_base0         #839496
#define S_base1         #93a1a1
#define S_base2         #eee8d5
#define S_base3         #fdf6e3
```

Then I updated the X11 configuration with xrdb.

```console
$ xrdb -load ${HOME}/.Xresources
```

# [](#rofi)Rofi

> [Rofi](https://davedavenport.github.io/rofi/), a replacement to
> [dmenu](http://tools.suckless.org/dmenu/) to easily find a new program to
> launch.

Rofi's configuration also goes in the Xresources files.

Example for `~/.Xresources-dark`:

```dotconfig
!                  bg         border   separator
rofi.color-window: #dd002b36, #002b36, #dd073642
!                  bg         fg       altbg      hlbg       hlfg
rofi.color-normal: #dd002b36, #839496, #00002b36, #dd073642, #859900
rofi.color-active: #dd002b36, #268bd2, #00002b36, #dd073642, #268bd2
rofi.color-urgent: #dd002b36, #d33682, #00002b36, #dd073642, #d33682
```

Here is how it looks for me:

![rofi dark & light examples](/assets/images/rofi-solarized.png)

# [](#dircolors)Dircolors

> dircolors is the color setup for the `ls` command.

To have ls colorize the directory/files in a solarized fashion, we need to
specify the dircolors parameters. I went with the
[joel-porquet/zsh-dircolors-solarized](https://github.com/joel-porquet/zsh-dircolors-solarized) plugin for [zsh](http://zsh.sourceforge.net/).

Using [zgen](https://github.com/tarjoilija/zgen) to manage my zsh plugins, I
added the following line to my `~/.zshrc`:

```zsh
zgen load joel-porquet/zsh-dircolors-solarized
```

Here is an example of dircolors from Termite with 80% transparency:

![dircolors solarized](/assets/images/dircolors-solarized.jpg)


# [](#i3)i3

> i3 is a tiling window manager, allowing one to always see all opened
> windows, without them stacking above each other. With plenty of keystrokes,
> it makes it possible to control every windows only using the keyboard, making
> the mouse pretty much useless.

My i3 stack consists of:

* [i3-gaps-next](https://github.com/Airblader/i3), the
  development branch of a fork of i3wm offering more features, like gaps
  between windows instead of borders.
* [i3blocks](https://github.com/Airblader/i3blocks-gaps) for the status line
* [i3lock](https://i3wm.org/i3lock/) as screen locker.

In addition, for my solarized theme switcher, I used
a fork of [i3-style](https://github.com/acrisci/i3-style), where I defined my
own transparent solarized themes, since I wasn't satisfied by the existing
theme.

To execute the script, I added a new binding in i3's configuration file:

```config
bindsym $mod+b  exec --no-startup-id ${HOME}/scripts/toggle_solarized_theme.sh
```

My `$mod` button is set to <kbd>Mod4</kbd>, which is the Windows key in my XPS
13. Hence, whenever I press <kbd>Mod4</kbd>-<kbd>b</kbd>, my applications will
toggle between dark and light solarized modes.
The **b** in the keystroke stands for "Background".

Finally, I added the following contents to the script:

```bash
#i3-style solarized-transparent-${newmode} -o ${HOME}/.config/i3/config --reload
coffee ${HOME}/scripts/cli.coffee solarized-transparent-${newmode} -o ${HOME}/.config/i3/config --reload
```

If my pull request gets accepted upstream, I'll be able to use the normal
i3-style script instead of the current coffee command.

For my statusbar, I only used accent colors to underline each i3block.

Here is how my i3 statusbar looks like:

![i3blocks solarized](/assets/images/i3blocks-solarized.jpg)

# [](#feh) feh

> feh is an image viewer that can also be used to set the desktop background
> image.

To set the background image, simply pass the `--bg-fill` parameter to feh:

```console
$ feh --bg-fill "${HOME}.config/wallpapers/solarized-mountains-${newmode}.png"
```

That will also create a file `~/.fehbg`, which can then be reused.
In my i3 configuration, I added the following line for that purpose:

```
exec_always --no-startup-id ~/.fehbg
```

For background image, I took a dark solarized image from [Deviant
Art](http://9beat7.deviantart.com/art/Solarized-Mountains-530027093):

![solarized background dark](/assets/images/solarized-mountains-dark.png)

Then I modified it with [Gimp](https://www.gimp.org/) to get a light solarized version.
You normally only need to change the 4 background/foreground colors when
toggling mode, accent colors staying the same in both modes. But the artist here
used a darkened version of 4 accent colors to ease the transition between
accent colors and the background color. Hence, I had to modify these shaded
parts into their lightened counterpart.
Here is how I proceeded:

```python
def get_halfway_color(al, bl):
    '''Function to calculate the color in-between two HSL colors'''
    for a,b in zip(al,bl):
        yield min([a,b])+abs(a-b)/2

# [Hue, Saturation, Lightness]
bg_light = [46, 11, 93]
gold = [45, 100, 71]
red = [1, 79, 87]
purple = [238, 44, 77]
green = [175, 71, 63]

for color in [gold, red, purple, green]:
    print(list(get_halfway_color(bg_light, color)))

# Output: 
# [45.5, 55.5, 82.0]
# [23.5, 45.0, 90.0]
# [142.0, 27.5, 85.0]
# [110.5, 41.0, 78.0]
```

Why did I use HSL colors instead of RGB ? Because it's a much more intuitive way
to find colors. After playing with it for a bit, I decided to only change the
saturation and lightness, which gave the following result.

![solarized background light](/assets/images/solarized-mountains-light.png)

Note that it would have been ideal to work with CIELab colors, but since Gimp
was showing HSL colors right off the bat, it was just simpler to go this way.


# [](#termite) Termite

> After using [urxvt](http://software.schmorp.de/pkg/rxvt-unicode.html) for many
> years, I switched to Termite, which behaves similarly in many ways and offers
> painless configuration like adding true transparency.

To set the solarized colors on Termite, edit the `~/.config/termite/config` file
and add the **[colors]** section. I used the configuration shared by
[alpha-omega/termite-colors-solarized](https://github.com/alpha-omega/termite-colors-solarized)
for that purpose.

What I did was copying the `solarized-dark` and `solarized-light` files in
`~/.config/termite/`, adding my other termite configs to each file.

Then, similarly to Xresources, changing the termite solarized theme can be done
as follows:

1. Symlink the theme file to config: `cd ~/.config/termite && ln -sf
   solarized-<dark|light> config`
2. Press <kbd>Ctrl</kbd>-<kbd>Shift</kbd>-<kbd>R</kbd> to reload the terminal.

**Note:** _Only 4 lines differ between both configuration files, so there should
be a smarter way to include them in the main config._

To reload the terminal programmatically, I proceed as follows:

```console
$ ln -sf ${config}-$newmode $config
$ killall -USR1 termite
```



# [](#vim)Configure Vim with solarized

For Vim, I re-used the color palette defined by
[lifepillar/vim-solarized8](https://github.com/lifepillar/vim-solarized8), and
added the following in my `~/.vimrc`:

```vim
Plug 'lifepillar/vim-solarized8'
nnoremap  <leader>B :<c-u>exe "colors" (g:colors_name =~# "dark"
    \ ? substitute(g:colors_name, 'dark', 'light', '')
    \ : substitute(g:colors_name, 'light', 'dark', '')
    \ )<cr>
fun! Solarized8Contrast(delta)
  let l:schemes = map(['_low', '_flat', '', '_high'], '"solarized8_".(&background).v:val')
  exe 'colors' l:schemes[((a:delta+index(l:schemes, g:colors_name)) % 4 + 4) % 4]
endf
nmap <leader>- :<c-u>call Solarized8Contrast(-v:count1)<cr>
nmap <leader>+ :<c-u>call Solarized8Contrast(+v:count1)<cr>
```

This allows me to use Solarized with True colors (24-bit colors, or 16 million
colors, supported by Termite). It also adds two interesting key bindings (my
Leader key being <kbd>,</kbd>):

* <kbd>,</kbd>-<kbd>B</kbd> will toggle the dark and light modes in Vim
* <kbd>,</kbd>-<kbd>-</kbd> and <kbd>,</kbd>-<kbd>+</kbd> allow me to change the
  contrast of the selected mode.

**Note:** I'm using [vim-plug](https://github.com/junegunn/vim-plug) as Vim
plugin manager, which is simple to use and full of smart features, for example
allowing to lazy-load modules when their command is called.

```vim
pattern="colorscheme solarized8_"
perl -e "s/${pattern}${oldmode}/${pattern}${newmode}/g" -pi ${HOME}.vimrc
for socket in /tmp/nvimsocket*; do
    nvr --servername $socket --remote-send ",B<Enter>";
done;
```

I then used [nvr](https://github.com/mhinz/neovim-remote) to send a color
toggle command to running vim sessions. The reason I used it is that the
[+clientserver](https://neovim.io/doc/user/remote.html#clientserver) of neovim
goes through the X-server (like [vim
--remote](http://vimdoc.sourceforge.net/htmldoc/remote.html) for that matter),
or I'm working with neovim in a terminal without GUI.
To create new nvim servers everytime I open vim, I added to my `~/.zshrc` file
the following:

```zsh
function vim () {
    COUNT=$(($((ls /tmp/nvimsocket*) 2>&/dev/null|tail -n 1|grep -Po 'nvimsocket\K[0-9]*$') + 1))
    printf -v COUNT "%05d" $COUNT
    NVIM_LISTEN_ADDRESS=/tmp/nvimsocket${COUNT} nvim $@
}
```
This function will create a new socket file suffixed with an incremented number,
so that nvr can easily retrieve all server and send them update commands.

# [](#gtk) GTK

Since I'm using several GTK 2.0 applications, like [Gimp](https://www.gimp.org/),
[Thunar](http://docs.xfce.org/xfce/thunar/start) or
[Deluge](http://deluge-torrent.org/), it also makes sense to update
the gtk 2.0 color theme.

I went with the [Numix
Solarized](https://github.com/Ferdi265/numix-solarized-gtk-theme) themes.

To update opened applications, I re-used [cpoakes'
script](http://crunchbang.org/forums/viewtopic.php?pid=428517#p428517) to send events.

```console
$ echo "include \"/usr/share/themes/NumixSolarized$([[ $newmode == 'dark' ]] \
    && echo 'Dark')/gtk-2.0/gtkrc\"" > ${HOME}/.gtkrc-2.0
$ python2.7 ${HOME}/scripts/gtkreload &
```



# [](#chrome)Google Chrome

Google Chrome currently uses GTK 2.0, but will eventually use GTK 3.0 by
default.
Note that enabling the GTK+ theme in `Settings → Appearance` isn't enough to get
a solarized look-and-feel. Google uses around 80 parameters for its design, and
will only pick some colors from GTK, while using custom colors for other
parameters.
To truly customize the Chrome theme, an extension-like theme needs to be built. It can then be uploaded to the Chrome store and used by anyone from there.
I used this [Solarized Dark
theme](https://chrome.google.com/webstore/detail/solarized-dark/kedemblecjmofcmppbecaagebmokigml), and since I couldn't find a Solarized Light version, I [built it myself](https://github.com/Fandekasp/google-chrome-solarized-light)

I couldn't figure out any way to reload Chrome the same way it reloads itself when
updating the settings or installing a new theme from the Chrome store.
Therefore, I went with a restart approach, specifying the
`--load-extension=/path/to/theme` parameter to the google google-chrome
executable. Another problem naturally occured from that decision: When
restarting an application, i3 will detect the windows being closed and
automatically re-tile the other windows, then repeat the process once chrome is
restarted, potentially breaking the window layout we had defined prior to
changing the theme. To avoid this issue, we can improve the script to save the
current layout before closing Chrome, then restore the layout once Chrome is
restarted.

```bash
if [[ $(ps auxw|grep chrome|grep -v grep|wc -l) -gt 0 ]]; then
    mapfile -t workspaces <<< $(i3-msg -t get_workspaces | jq -r '.[] | .name')

    # Add save-tree logic here
    for ws in "${workspaces[@]}"; do
        i3-save-tree --workspace "$ws" > ~/.config/i3sessions/workspace-${ws:0:1}.json
        # Swallows all
        perl -e "s/\/\/ \"/\"/g" -pi ~/.config/i3sessions/workspace-${ws:0:1}.json
    done

    # Kill Chrome
    killall chrome

    # Swallow other windows
    ids=$(xdotool search --onlyvisible --name '.*')
    IFS='
    '
    ids=( $ids )
    for id in "${ids[@]}"; do
        xdotool windowunmap $id
    done

    # Restore logic
    for ws in "${workspaces[@]}"; do
        i3-msg "workspace $ws; append_layout ~/.config/i3sessions/workspace-${ws:0:1}.json"
    done

    # Go back to first workspace
    i3-msg "workspace ${workspaces[0]}"

    # Restart Chrome
    exec google-chrome-stable --load-extension=${HOME}/Projects/personal/google-chrome-solarized-${newmode}-theme &

    # Give some time for i3 to append the layout and chrome to start
    sleep 0.5

    # Unswallow other windows
    for id in "${ids[@]}"; do
        xdotool windowmap $id
    done
fi
```
While saving the layout with `i3-save-tree` is straightforward, restoring it
with `i3-msg "append_layout ..."` was quite difficult, because it will simply
add new containers next to existing containers. The trick was to use `xdotool`
to swallow existing windows like Termite, and unswallow them for i3 to add them
back in the new layout.


# [](#script)Resulting script

To update everything at once in a single script, all that is left is finding the
current theme and execute each bit while calling the new theme.
I used the termite configuration file to set the new mode:

```bash
HOME=/home/dori/
config=${HOME}.config/termite/config
oldmode=$([[ -z $(diff $config ${config}-dark) ]] && echo 'dark' || echo 'light')
newmode=$([[ $oldmode == 'dark' ]] && echo 'light' || echo 'dark')
```


The line `[[ -z $(diff $config $dark) ]]` runs a diff between the config file
and the dark one. If the result is empty (both files are the same), then let's
symlink the light configuration, otherwise let's symlink the dark one.

**Note**: _Since we're symlinking files, there should be a smarter way to
compare them than running diff._


And we're done! You can see below the full script:

```bash
#!/bin/bash

termite_conf=${HOME}/.config/termite/config
oldmode=$([[ -z $(diff $termite_conf ${termite_conf}-dark) ]] && echo 'dark' || echo 'light')
newmode=$([[ $oldmode == 'dark' ]] && echo 'light' || echo 'dark')

# i3
# Toggle the following 2 lines if my PR gets merged in upstream i3-style
#i3-style solarized-transparent-${newmode} -o ${HOME}/.config/i3/config --reload
coffee ${HOME}/scripts/cli.coffee solarized-transparent-${newmode} -o ${HOME}/.config/i3/config --reload

# Background
feh --bg-fill "${HOME}/.config/wallpapers/solarized-mountains-${newmode}.png"

# .Xresources
ln -sf ${HOME}/.Xresources-$newmode ${HOME}/.Xresources
xrdb -load ${HOME}/.Xresources

# Termite
ln -sf ${termite_conf}-$newmode $termite_conf
killall -USR1 termite

# Vim
pattern="colorscheme solarized8_"
perl -e "s/${pattern}${oldmode}/${pattern}${newmode}/g" -pi ${HOME}/.vimrc
for socket in /tmp/nvimsocket*; do
    nvr --servername $socket --remote-send ",B<Enter>";
done;

# GTK2 apps (e.g Gimp, Thunar, Deluge, Chrome)
echo "include \"/usr/share/themes/NumixSolarized$([[ $newmode == 'dark' ]] \
    && echo 'Dark')/gtk-2.0/gtkrc\"" > ${HOME}/.gtkrc-2.0
python2.7 ${HOME}/scripts/gtkreload &

# Chrome
if [[ $(ps auxw|grep chrome|grep -v grep|wc -l) -gt 0 ]]; then
    mapfile -t workspaces <<< $(i3-msg -t get_workspaces | jq -r '.[] | .name')

    # Add save-tree logic here
    for ws in "${workspaces[@]}"; do
        i3-save-tree --workspace "$ws" > ~/.config/i3sessions/workspace-${ws:0:1}.json
        # Swallows all
        perl -e "s/\/\/ \"/\"/g" -pi ~/.config/i3sessions/workspace-${ws:0:1}.json
    done

    # Kill Chrome
    killall chrome

    # Swallow other windows
    ids=$(xdotool search --onlyvisible --name '.*')
    IFS='
    '
    ids=( $ids )
    for id in "${ids[@]}"; do
        xdotool windowunmap $id
    done

    # Restore logic
    for ws in "${workspaces[@]}"; do
        i3-msg "workspace $ws; append_layout ~/.config/i3sessions/workspace-${ws:0:1}.json"
    done

    # Go back to first workspace
    i3-msg "workspace ${workspaces[0]}"

    # Restart Chrome
    exec google-chrome-stable --load-extension=${HOME}/Projects/personal/google-chrome-solarized-${newmode}-theme &

    # Give some time for i3 to append the layout and chrome to start
    sleep 0.5

    # Unswallow other windows
    for id in "${ids[@]}"; do
        xdotool windowmap $id
    done
fi
```
