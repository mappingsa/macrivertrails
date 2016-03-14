# This module contains helpers used only in templates
# See also env_helpers.rb, which are additionally made available within config.rb
# There was a change in Middleman 4.0 such that helpers are no longer accessible
# from within config.rb. So, we load env_helpers separately in config.rb

module CustomHelpers

  def blank_line
    "\n\n"
  end

  def next_line
    "\n"
  end

  def base_uri
    data.rivertrails[build_target].base_uri
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

  def home_uri
    root_uri('index.html')
  end

  def path_images
    base_uri ? ( base_uri + 'images/' ) : path_to( '/images')
  end

  def images_uri(uri)
    path_images + uri
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

  def external_href(uri)
    'href="' + uri + '" target="_blank"'
  end

  def external_link(uri)
    short_uri = uri.sub(/^https?\:\/\//, '')
    '<a ' + external_href(uri) + '>' + short_uri + '</a>'
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