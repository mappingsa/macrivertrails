require 'slim'
require 'helpers/env_helpers'
extend EnvHelpers

set :slim, {
  :tabsize => 2,
  :format => :html,
  :pretty => true,
  :disable_escape => true,
  :shortcut => {
    '@' => { :attr => 'data-role' },
    '#' => { :attr => 'id' },
    '.' => { :attr => 'class' }
    }
  }

set :erb, {
  :layout_engine => :slim
}

set :css_dir, 'css'
set :js_dir, 'js'
set :images_dir, 'images'
set :build_dir, "build/#{build_target}"

# Build-specific configuration
configure :build do
  # Minify Javascript on build
  if build_target =~ /debug/
    # This is a debug build, and we are not minifying JS/CSS
    # Do not include vendor pre-minified files in the build.
    ignore '/js/jquery.mobile-1.2.1.min.js'
	ignore '/js/jquery.mobile-1.4.5.min.js'
    ignore '/js/jquery-1.8.2.min.js'
    ignore '/css/jquery.mobile.structure-1.2.1.min.css'
	ignore '/css/jquery.mobile.structure-1.4.5.min.css'
  else
    activate :minify_css
    activate :minify_javascript
    # This is a production build.
    # The following files are pre-minified by the vendor. Do not include the
    # uncompressed versions in the build.
    ignore '/js/jquery.mobile-1.2.1.js'
	ignore '/js/jquery.mobile-1.4.5.js'
    ignore '/js/jquery-1.8.2.js'
    ignore '/css/jquery.mobile.structure-1.2.1.css'
	ignore '/css/jquery.mobile.structure-1.4.5.css'
	
  end

  # Use relative URLs if we do not have a base
  #activate :relative_assets if !base_defined?
  activate :relative_assets

  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher

end
