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
      ENV['MIDDLEMAN_BUILD_TARGET'].downcase.to_sym
    else
      :debug
    end
  end

  def jqm_version
    JQM_VERSION
  end


  # returns relative path from current page to given path
  def path_to(path)
    #Pathname.new(Pathname.new( path ).relative_path_from( Pathname.new( '/' + current_page.destination_path ).dirname) ).cleanpath.to_s
    path
  end

  # returns relative paths to various directories
  #
  # This is to support partials that might be used by templates at any level of the directory
  # structure, and that need to reference another directory by relative path. Relative path
  # is needed because, in PhoneGap, we are referencing a local filesystem, and root-relative
  # paths are not useful, because they reference the filesystem root, and not the www root.

  def base_defined?
    !!data.rivertrails[build_target].base
  end

  def path_root
    #path_to '/'
    path_to ''
  end

  def path_images
    path_to '/images'
  end

  def path_info
    path_to '/Info'
  end

  def path_map
    path_to '/map'
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
  if build_target != :debug
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
