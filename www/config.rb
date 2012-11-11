require 'slim'

set :slim, {
  :layout_engine => :slim,
  :tabsize => 2,
  :format => :html5,
  :pretty => true,
  :disable_escape => true,
  :shortcut => {
    '@' => 'data-role',
    '#' => 'id',
    '.' => 'class'}
  }

set :erb, {
  :layout_engine => :slim
}

###
# Compass
###

# Susy grids in Compass
# First: gem install susy --pre
# require 'susy'

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end


# Proxy (fake) files
# page "/this-page-has-no-template.html", :proxy => "/template-file.html" do
#   @which_fake_page = "Rendering a fake page with a variable"
# end

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

helpers do
  def blank_line
    "\n\n"
  end

  def next_line
    "\n"
  end

  def build_target
    if ENV['MIDDLEMAN_BUILD_TARGET']
      ENV['MIDDLEMAN_BUILD_TARGET'].downcase
    else
      'debug'
    end
  end

  def base_uri
    data.rivertrails.debug.base_uri
  end

  # returns relative path from provided or current file path to given path
  # path is supplied in site-relative form
  #
  # from_file_path_in is optional - if absent, we will get the current
  #   page path from Middleman. It must be supplied for Javascript that is constructing
  #   elements on a page from a script in js path. (So using current file path would
  #   be incorrect)
  def path_to(to)
    from = Pathname.new('/' + current_resource.destination_path).dirname
    rp = Pathname.new( Pathname.new(to).relative_path_from(from) ).cleanpath.to_s + '/'
    rp == './' ? '' : rp
  end


  # returns relative paths to various directories
  #
  # This is to support partials that might be used by templates at any level of the directory
  # structure, and that need to reference another directory by relative path. Relative path
  # is needed because, in PhoneGap, we are referencing a local filesystem, and root-relative
  # paths are not useful, because they reference the filesystem root, and not the www root.
  #
  # This is also now used as a substitute for using a <base> tag, which does not work
  # correctly with jQuery Mobile.

  def path_root
    base_uri ? base_uri  : path_to( '/' )
  end

  def root_uri(uri)
    path_root + uri
  end

  def path_images
    base_uri ? ( base_uri + 'images/' ) : path_to( '/images', from )
  end

  def images_uri(uri)
    path_images(from) + uri
  end

  def path_sponsor_images
    base_uri ? ( base_uri + 'images/Sponsors/' ) : path_to( '/images/Sponsors' )
  end

  def sponsor_images_uri(uri)
    path_sponsor_images + uri
  end

  def path_info
    base_uri ? ( base_uri + 'Info/' ) : path_to( '/Info' )
  end

  def info_uri(uri)
    path_info + uri
  end

  def path_map
    base_uri ? ( base_uri + 'map/' ) : path_to( '/map' )
  end

  def map_uri(uri)
    path_map + uri
  end

  def path_map_images
    base_uri ? ( base_uri + 'map/images/' ) : path_to( '/map/images' )
  end

  def map_images_uri(uri)
    path_map_images + uri
  end

  # Helper to add active class if current_page basename (not including extension)
  #  matches supplied string.
  # Returns a hash meant to be used as a Slim splat attribute
  #
  # Use in left-hand side of Slim statement
  # Example: a*active('about')
  #
  # In the above example, the class "ui-btn-active' will be added to the <a> tag if the current
  # page is about.html.
  def active(basename)
  basename == Pathname.new(current_page.destination_path).basename.to_s.sub(/\..*/, '') ? {'class' => 'ui-btn-active'} : {}
  end

end

set :css_dir, 'css'

set :js_dir, 'js'

set :images_dir, 'images'

set :build_dir, "build/#{build_target}"


# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  if build_target != 'debug'
    activate :minify_css
    activate :minify_javascript
    # This is a production build.
    # The following files are pre-minified by the vendor. Do not include the
    # uncompressed versions in the build.
    # Using patched jQuery Mobile
    #ignore '/js/jquery.mobile-1.2.0.js'
    ignore '/js/jquery-1.7.2.js'
    ignore '/js/jquery-1.8.2.js'
    ignore '/css/jquery.mobile.structure-1.2.0.css'
  else
    # This is a debug build, and we are not minifying JS/CSS
    # Do not include vendor pre-minified files in the build.
    ignore '/js/jquery.mobile-1.2.0.min.js'
    ignore '/js/jquery-1.7.2.min.js'
    ignore '/js/jquery-1.8.2.min.js'
    ignore '/css/jquery.mobile.structure-1.2.0.min.css'
  end


  # Enable cache buster
  # activate :cache_buster

  # Use relative URLs if we do not have a base
  #activate :relative_assets if !base_defined?
  activate :relative_assets

  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end
