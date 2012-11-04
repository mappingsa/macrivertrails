$(function() {

  $(document).on( "pageinit", ".map-page", function() {

  var
    cycle = new google.maps.MarkerImage('images/Cycle-pin.png', new google.maps.Size(30,42), new google.maps.Point(0,0), new google.maps.Point(10,10)),
    heritage = new google.maps.MarkerImage('images/Heritage-pin.png', new google.maps.Size(30,42), new google.maps.Point(0,0), new google.maps.Point(10,10)),
    nature = new google.maps.MarkerImage('images/Nature-pin.png', new google.maps.Size(30,42), new google.maps.Point(0,0), new google.maps.Point(10,10)),
    produce = new google.maps.MarkerImage('images/Produce-pin.png', new google.maps.Size(30,42), new google.maps.Point(0,0), new google.maps.Point(10,10)),
    river = new google.maps.MarkerImage('images/River-pin.png', new google.maps.Size(30,42), new google.maps.Point(0,0), new google.maps.Point(10,10)),
    riverbedz = new google.maps.MarkerImage('images/Riverbedz-pin.png', new google.maps.Size(30,42), new google.maps.Point(0,0), new google.maps.Point(10,10)),
    fishing = new google.maps.MarkerImage('images/Fishing-pin.png', new google.maps.Size(30,42), new google.maps.Point(0,0), new google.maps.Point(10,10)),
    shadow = new google.maps.MarkerImage('images/shadow.png', new google.maps.Size(30,42), new google.maps.Point(0,0), new google.maps.Point(10, 10)),

    boatramp = new google.maps.MarkerImage('images/boatramp.png', new google.maps.Size(32,37), new google.maps.Point(0,0), new google.maps.Point(10,10)),
    info = new google.maps.MarkerImage('images/info.png', new google.maps.Size(32,37), new google.maps.Point(0,0), new google.maps.Point(10,10)),
    rv = new google.maps.MarkerImage('images/rv.png', new google.maps.Size(32,37), new google.maps.Point(0,0), new google.maps.Point(10,10)),

    markers = [
        {'group': 'cycle', 'icon': cycle, 'item': 'geurie',  'position': '-32.400028, 148.818317', 'title': 'Geurie-Bald Hill Mountain Bike Trails', 'text': 'Geurie-Bald Hill Mountain Bike Trails' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'cycle', 'icon': cycle, 'item': 'beni', 'position': '-32.246925, 148.72464', 'title': 'Beni State Conservation Area cycling, Dubbo', 'text': 'Beni State Conservation Area cycling, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'cycle', 'icon': cycle, 'item': 'powterpark', 'position': '-32.239314, 148.611986', 'title': 'Powter Park BMX Track, Dubbo', 'text': 'Powter Park BMX Track, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'cycle', 'icon': cycle, 'item': 'muggahill',  'position': '-32.225101, 148.663177', 'title': 'Mugga Hill Mountain Bike Park, Dubbo', 'text': 'Mugga Hill Mountain Bike Park, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'cycle', 'icon': cycle, 'item': 'trackerhill',  'position': '-32.256086, 148.589706', 'title': 'Tracker Riley Cycleway and Walking Trail, Dubbo', 'text': 'Tracker Riley Cycleway and Walking Trail, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'cycle', 'icon': cycle,  'item': 'warrens', 'position': '-31.706786, 147.842214', 'title': 'Warrens walking and cycling tracks', 'text': 'Warrens walking and cycling tracks' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'produce', 'icon': produce, 'item': 'edgertonnursery',  'position': '-32.230047, 148.239667', 'title': 'Edgerton Nursery, Narromine', 'text': 'Edgerton Nursery, Narromine' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'produce', 'icon': produce, 'item': 'andonbel',  'position': '-32.252942, 148.264381', 'title': 'Andonbel Alpacas and Coffee Shop, Narromine', 'text': 'Andonbel Alpacas and Coffee Shop, Narromine' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'produce', 'icon': produce, 'item': 'cottagecraft',  'position': '-32.23074, 148.240036', 'title': 'Narromine Cottage Craft Shop', 'text': 'Narromine Cottage Craft Shop' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'produce', 'icon': produce, 'item': 'woodshed',  'position': '-32.232971, 148.240082', 'title': 'The Woodshed Gallery, Narromine', 'text': 'The Woodshed Gallery, Narromine' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'produce', 'icon': produce, 'item': 'ewetwo',  'position': '-32.033397, 147.985794', 'title': 'Ewe Two, Trangie', 'text': 'Ewe Two, Trangie' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'produce', 'icon': produce, 'item': 'bellriver',  'position': '-32.687631, 148.945311', 'title': 'Bell River Estate, Wellington,', 'text': 'Bell River Estate, Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'produce', 'icon': produce, 'item': 'cactuscafe',  'position': '-32.551264, 148.942136', 'title': 'Cactus Cafe and Gallery, Wellington', 'text': 'Cactus Cafe and Gallery, Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'produce', 'icon': produce, 'item': 'lazyriver',  'position': '-32.296532, 148.627426', 'title': 'Lazy River Estate, Dubbo', 'text': 'Lazy River Estate, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'produce', 'icon': produce, 'item': 'farmers',  'position': '-32.243450, 148.601672', 'title': 'Farmers Market, Dubbo', 'text': 'Farmers Market, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'produce', 'icon': produce, 'item': 'redearth',  'position': '-32.293483, 148.585164', 'title': 'Red Earth Estate, Dubbo', 'text': 'Red Earth Estate, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'produce', 'icon': produce, 'item': 'limegrove',  'position': '-32.191757, 148.189713', 'title': 'Lime Grove, Narromine', 'text': 'Lime Grove, Narromine' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'produce', 'icon': produce, 'item': 'macquariegrove',  'position': '-32.21899, 148.241791', 'title': 'Macquarie Grove Vineyard, Narromine', 'text': 'Macquarie Grove Vineyard, Narromine' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'produce', 'icon': produce, 'item': 'tilleyswines',  'position': '-31.711003, 147.845267', 'title': 'Tilleys Wines, Warren', 'text': 'Tilleys Wines, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'heritage', 'icon': heritage, 'item': 'cavesbottle',  'position': '-32.620367, 148.939019', 'title': 'Caves Bottle House, Wellington', 'text': 'Caves Bottle House, Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'heritage', 'icon': heritage, 'item': 'peterbrowne',  'position': '-33.089809, 148.869247', 'title': 'Peter Browne Studio Gallery, Molong', 'text': 'Peter Browne Studio Gallery, Molong' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'heritage', 'icon': heritage, 'item': 'erisfleming',  'position': '-32.758392, 148.928178', 'title': 'Eris Fleming Gallery, Wellington', 'text': 'Eris Fleming Gallery, Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'heritage', 'icon': heritage, 'item': 'oxley', 'position': '-32.551336, 148.942775', 'title': 'Oxley Museum, Wellington', 'text': 'Oxley Museum, Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'heritage', 'icon': heritage, 'item': 'billoshea',  'position': '-32.256493, 148.646622', 'title': 'Bill O Sheas Studio Gallery, Dubbo', 'text': 'Bill O Sheas Studio Gallery, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'heritage', 'icon': heritage, 'item': 'loungegallery',     'position': '-32.244167, 148.582703', 'title': 'Lounge Gallery and Cafe, Dubbo', 'text': 'Lounge Gallery and Cafe, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'heritage', 'icon': heritage, 'item': 'hermitagehill',  'position': '-32.560369, 148.960497', 'title': 'Hermitage Hill Resort', 'text': 'Hermitage Hill Resort' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'heritage', 'icon': heritage, 'item': 'gratton',  'position': '-32.286239, 148.602864', 'title': 'Tim Gratton & Dundullimal', 'text': 'Tim Gratton & Dundullimal' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'heritage', 'icon': heritage, 'item': 'wellingtoncaves',  'position': '-32.620994, 148.938186', 'title': 'Wellington Caves Phosphate Mine and Osawano Japanese Gardens', 'text': 'Wellington Caves Phosphate Mine and Osawano Japanese Gardens' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'heritage', 'icon': heritage, 'item': 'lion',  'position': '-32.540578, 148.930692', 'title': 'Lion of Waterloo country pub, Wellington', 'text': 'Lion of Waterloo country pub, Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'heritage', 'icon': heritage, 'item': 'garlinggallery', 'position': '-32.334639, 148.759894', 'title': 'Garling Gallery, Wongarbon', 'text': 'Garling Gallery, Wongarbon' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'heritage', 'icon': heritage, 'item': 'dundullimal',  'position': '-32.286239, 148.602864', 'title': 'Dundullimal Homestead Dubbo', 'text': 'Dundullimal Homestead Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'heritage', 'icon': heritage, 'item': 'pioneer',  'position': '-32.302008, 148.625236', 'title': 'Pioneer cemetery, Dubbo', 'text': 'Pioneer cemetery, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'heritage', 'icon': heritage, 'item': 'westernplains',  'position': '-32.249912, 148.609604', 'title': 'Western Plains Cultural Centre, Dubbo', 'text': 'Western Plains Cultural Centre, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'heritage', 'icon': heritage, 'item': 'gaol',  'position': '-32.245766, 148.601624', 'title': 'Old Dubbo Gaol', 'text': 'Old Dubbo Gaol' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'heritage', 'icon': heritage, 'item': 'shoyeon',  'position': '-32.253908, 148.634189', 'title': 'Shoyeon Japanese Garden, Dubbo', 'text': 'Shoyeon Japanese Garden, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'heritage', 'icon': heritage, 'item': 'aviation',  'position': '-32.222778, 148.229125', 'title': 'Narromine Aviation Museum', 'text': 'Narromine Aviation Museum' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'heritage', 'icon': heritage, 'item': 'woodshed', 'position': '-32.232971, 148.240082', 'title': 'The Woodshed Gallery, Narromine', 'text': 'The Woodshed Gallery, Narromine' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'nature', 'icon': nature, 'item': 'burrendonggarden',  'position': '-32.688297, 149.108519', 'title': 'Burrendong Botanic Garden and Arboretum', 'text': 'Burrendong Botanic Garden and Arboretum' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'nature', 'icon': nature, 'item': 'tarongazoo',  'position': '-32.272233, 148.586328', 'title': 'Taronga Western Plains Zoo, Dubbo', 'text': 'Taronga Western Plains Zoo, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'nature', 'icon': nature, 'item': 'dubbobotanic',  'position': '-32.253117, 148.635050', 'title': 'Dubbo Regional Botanic Garden', 'text': 'Dubbo Regional Botanic Garden' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'nature', 'icon': nature, 'item': 'wongarbon',  'position': '-32.330067, 148.767014', 'title': 'Wongarbon Tank Reserve', 'text': 'Wongarbon Tank Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'nature', 'icon': nature, 'item': 'rotarywetland',  'position': '-32.247919, 148.236222', 'title': 'Rotary Wetland, Narromine', 'text': 'Rotary Wetland, Narromine' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'nature', 'icon': nature, 'item': 'argonauts',  'position': '-32.031326, 147.987045', 'title': 'Argonauts Park-Goan Waterhole, Trangie', 'text': 'Argonauts Park-Goan Waterhole, Trangie' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'nature', 'icon': nature, 'item': 'tigerbay',  'position': '-31.694647, 147.842550', 'title': 'Tiger Bay Wetland, Warren', 'text': 'Tiger Bay Wetland, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'nature', 'icon': nature, 'item': 'wetlandviewing',  'position': '-30.880064, 147.697353', 'title': 'Wetland viewing platform Macquarie Marshes', 'text': 'Wetland viewing platform Macquarie Marshes' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'nature', 'icon': nature, 'item': 'willieretreat', 'position': '-30.898687, 147.465805', 'title': 'Willie Retreat Macquarie Marshes', 'text': 'Willie Retreat Macquarie Marshes' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'nature', 'icon': nature, 'item': 'platypus',  'position': '-32.553092, 148.941039', 'title': 'Platypus spotting, Wellington', 'text': 'Platypus spotting, Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'nature', 'icon': nature, 'item': 'mountarther',  'position': '-32.553067, 148.916225', 'title': 'Mount Arthur Reserve and Lookout, Wellington', 'text': 'Mount Arthur Reserve and Lookout, Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'nature', 'icon': nature, 'item': 'macquariemarshsouth',  'position': '-30.924103, 147.459008', 'title': 'South Macquarie Marsh Nature Reserve', 'text': 'South Macquarie Marsh Nature Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'nature', 'icon': nature, 'item': 'macquariemarshnorth',  'position': '-30.814878, 147.500178', 'title': 'North Macquarie Marsh Nature Reserve', 'text': 'North Macquarie Marsh Nature Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'nature', 'icon': nature, 'item': 'touristpark',  'position': '-32.223497, 148.229931', 'title': 'Scenic helicopter rides over the Macquarie Marshes', 'text': 'Macquarie Marsh Nature Reserves' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'river', 'icon': river, 'item': 'mookereawa', 'position': '-32.770344, 149.148642', 'title': 'Mookerawa Waters State Park Lake Burrendong', 'text': 'Mookerawa Waters State Park Lake Burrendong' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'river', 'icon': river, 'item': 'johnoxley', 'position': '-32.542912, 148.933151', 'title': 'John Oxley Park, Wellington', 'text': 'John Oxley Park, Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'river', 'icon': river, 'item': 'cameronpark',  'position': '-32.553005, 148.941086', 'title': 'Cameron and Pioneer Park, Wellington', 'text': 'Cameron and Pioneer Park, Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'river', 'icon': river, 'item': 'sirrodenpark',  'position': '-32.255192, 148.588318', 'title': 'Sir Roden Cutler Park, Dubbo', 'text': 'Sir Roden Cutler Park, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'river', 'icon': river, 'item': 'riverbankpark',  'position': '-32.246338, 148.599518', 'title': 'Riverbank Park, Dubbo', 'text': 'Platypus spotting, Wellington ' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'river', 'icon': river, 'item': 'lionspark',  'position': '-32.249222, 148.594892', 'title': 'Lions Park West Dubbo', 'text': 'Lions Park West, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'river', 'icon': river, 'item': 'langleys',  'position': '-32.246685, 148.599045', 'title': 'Langleys River Cruises, Dubbo', 'text': 'Langleys River Cruises, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'river', 'icon': river, 'item': 'sandycreek',  'position': '-31.748814, 147.783692', 'title': 'Sandy Creek Rest Area, Warren', 'text': 'Sandy Creek Rest Area, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'river', 'icon': river, 'item': 'lionmacquarieparks',    'position': '-31.703211, 147.83931', 'title': 'Lions Park, Warren', 'text': 'Lions Park, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'river', 'icon': river, 'item': 'otherpark',    'position': '-31.698100, 147.838717', 'title': 'Macquarie Park, Warren', 'text': 'Macquarie Park, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'river', 'icon': river, 'item': 'moreparks',  'position': '-31.695536, 147.838031', 'title': 'Victoria Park and Oval, Warren', 'text': 'Victoria Park and Oval, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'river', 'icon': river, 'item': 'ebertpark',  'position': '-31.699581, 147.839622', 'title': 'Ebert Park, Warren', 'text': 'Ebert Park, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'river', 'icon': river, 'item': 'oxleypark',  'position': '-31.696989, 147.839881', 'title': 'Oxley Park, Warren', 'text': 'Oxley Park, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'river', 'icon': river, 'item': 'orchardpark',  'position': '-31.700569, 147.842375', 'title': 'Orchard Street Park, Warren', 'text': 'Orchard Street Park, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'river', 'icon': river, 'item': 'willieretreat',  'position': '-30.898687, 147.465805', 'title': 'Willie Retreat Macquarie Marshes', 'text': 'Willie Retreat Macquarie Marshes' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'river', 'icon': river, 'item': 'riversidetp',  'position': '-31.558367, 147.180984', 'title': 'Nyngan Riverside Tourist Park', 'text': 'Nyngan Riverside Tourist Park' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'river', 'icon': river, 'item': 'sport', 'position': '-32.707633, 149.1149946', 'title': 'Lake Burrendong Sport and Recreation', 'text': 'Lake Burrendong Sport and Recreation' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'river', 'icon': river, 'item': 'wellingtoncp', 'position': '-32.542417, 148.942706', 'title': 'Wellington Riverside Caravan Park', 'text': 'Wellington Riverside Caravan Park' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'river', 'icon': river, 'item': 'terramungamine',  'position': '-32.168713, 148.585022', 'title': 'Terramungamine Reserve, Dubbo', 'text': 'Terramungamine Reserve, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'river', 'icon': river, 'item': 'sandybeach',  'position': '-32.256325, 148.590622', 'title': 'Sandy Beach, Dubbo', 'text': 'Sandy Beach, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'river', 'icon': river, 'item': 'rotarypark',  'position': '-32.226742, 148.246664', 'title': 'Rotary Riverside Park, Narromine', 'text': 'Rotary Riverside Park, Narromine' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'river', 'icon': river, 'item': 'macquairecp',  'position': '-31.695214, 147.8398086', 'title': 'Macquarie Caravan Park, Warren', 'text': 'Macquarie Caravan Park, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'river', 'icon': river, 'item': 'macquairecanoe',  'position': '-32.542912, 148.933151', 'title': 'Macquarie river canoe and kayak trail', 'text': 'Macquarie river canoe and kayak trail' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'river', 'icon': river, 'item': 'big4',  'position': '-32.257458, 148.587414', 'title': 'BIG 4 Parklands, Dubbo', 'text': 'BIG 4 Parklands, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'river', 'icon': river, 'item': 'lakeburrendong',  'position': '-32.688095, 149.108505', 'title': 'Lake Burrendong State Park', 'text': 'Lake Burrendong State Park' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'riverbedz', 'icon': riverbedz, 'item': 'abeltasman',  'position': '-32.254986, 148.587600', 'title': 'Abel Tasman Motor Inn, Dubbo', 'text': 'Abel Tasman Motor Inn, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'riverbedz', 'icon': riverbedz, 'item': 'bridgemotel',  'position': '-32.544325, 148.941369', 'title': 'Bridge Motel, Wellington', 'text': 'Bridge Motel, Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'riverbedz', 'icon': riverbedz, 'item': 'willieretreat',  'position': '-30.898687, 147.465805', 'title': 'Willie Retreat Macquarie Marshes', 'text': 'Willie Retreat Macquarie Marshes' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'riverbedz', 'icon': riverbedz, 'item': 'lakeburrendong',  'position': '-32.688095, 149.108505', 'title': 'Lake Burrendong State Park', 'text': 'Lake Burrendong State Park' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'riverbedz', 'icon': riverbedz, 'item': 'big4',  'position': '-32.257458, 148.587414', 'title': 'BIG 4 Parklands, Dubbo', 'text': 'BIG 4 Parklands, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'riverbedz', 'icon': riverbedz, 'item': 'wellingtoncp',  'position': '-32.542417, 148.942706', 'title': 'Wellington Riverside Caravan Park', 'text': 'Wellington Riverside Caravan Park' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'riverbedz', 'icon': riverbedz, 'item': 'hermitagehill', 'position': '-32.560369, 148.960497', 'title': 'Hermitage Hill Country Retreat and Function Centre, Wellington', 'text': 'Hermitage Hill Country Retreat and Function Centre, Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'riverbedz', 'icon': riverbedz, 'item': 'macquairecp',  'position': '-31.695214, 147.839808', 'title': 'Macquarie Caravan Park, Warren', 'text': 'Macquarie Caravan Park, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'riverbedz', 'icon': riverbedz, 'item': 'riversidetp',  'position': '-31.558367, 147.180984', 'title': 'Nyngan Riverside Tourist Park', 'text': 'Nyngan Riverside Tourist Park' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'riverbedz', 'icon': riverbedz, 'item': 'touristpark',  'position': '-32.223497, 148.229931', 'title': 'Tourist Park & Motel, Narromine', 'text': 'Tourist Park & Motel, Narromine' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'riverbedz', 'icon': riverbedz, 'item': 'peppercorn',  'position': '-32.225553, 148.238061', 'title': 'Peppercorn Motor Inn, Narromine', 'text': 'Peppercorn Motor Inn, Narromine' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'mookerawa',  'position': '-32.770344, 149.148642', 'title': 'Mookerawa Waters and Lake Burrendong State Parks, near Wellington', 'text': 'Mookerawa Waters and Lake Burrendong State Parks, near Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'johnoxley', 'position': '-32.542912, 148.933151', 'title': 'John Oxley Park, Wellington', 'text': 'John Oxley Park, Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'ponto', 'position': '-32.465889, 148.820753', 'title': 'Ponto Falls Reserve', 'text': 'Ponto Falls Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'scabbing', 'position': '-32.430489, 148.810336', 'title': 'Scabbing Flat Reserve, Geurie Bridge', 'text': 'Scabbing Flat Reserve, Geurie Bridge' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'peach', 'position': '-32.447453, 148.776808', 'title': 'Peach Trees Reserve', 'text': 'Peach Trees Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'bril', 'position': '-32.414511, 148.724722', 'title': 'Bril Bral Reserve', 'text': 'Bril Bral Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'butler', 'position': '-32.314511, 148.621225', 'title': 'Butler&rsquo;s Falls Reserve', 'text': 'Butler&rsquo;s Falls Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'pilcher', 'position': '-32.299411, 148.622853', 'title': 'Pilcher&rsquo;s Reserve', 'text': 'Pilcher&rsquo;s Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'caroline', 'position': '-32.294275, 148.627356', 'title': 'Caroline&rsquo;s Reserve', 'text': 'Caroline&rsquo;s Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'dundullimal', 'position': '-32.283044, 148.601728', 'title': 'Dundullimal Reserve', 'text': 'Dundullimal Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'sandybeach',  'position': '-32.256325, 148.590622', 'title': 'Sandy Beach, Dubbo', 'text': 'Sandy Beach, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'riverbankpark',  'position': '-32.246338, 148.599518', 'title': 'Riverbank Park, Dubbo', 'text': 'Platypus spotting, Wellington ' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'lionspark',  'position': '-32.249222, 148.594892', 'title': 'Lions Park West Dubbo', 'text': 'Lions Park West, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'devil', 'position': '-32.228244, 148.611044', 'title': 'Devil&rsquo;s Hole Reserve, Dubbo', 'text': 'Devil&rsquo;s Hole Reserve, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'terramungamine',  'position': '-32.168713, 148.585022', 'title': 'Terramungamine Reserve, Dubbo', 'text': 'Terramungamine Reserve, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'redbank', 'position': '-32.168867, 148.530711', 'title': 'Redbank Reserve', 'text': 'Redbank Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'north', 'position': '-32.172192, 148.510972', 'title': 'North Burrabadine Reserve', 'text': 'North Burrabadine Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'whylandra', 'position': '-32.189733, 148.495825', 'title': 'Whylandra Crossing Reserves', 'text': 'Whylandra Crossing Reserves' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'dickigundie', 'position': '-32.191972, 148.456272', 'title': 'Dickigundie Reserve', 'text': 'Dickigundie Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'minore', 'position': '-32.194422, 148.395839', 'title': 'Minore Falls Reserve', 'text': 'Minore Falls Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'brummagen', 'position': '-32.232447, 148.363664', 'title': 'Brummagen Bridge Reserve', 'text': 'Brummagen Bridge Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'reserve', 'position': '-32.227100, 148.352958', 'title': 'Brummagen Reserve', 'text': 'Brummagen Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'webb', 'position': '-32.243444, 148.295431', 'title': 'Webb&rsquo;s Siding Reserve, Narromine', 'text': 'Webb&rsquo;s Siding Reserve, Narromine' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'rotarypark',  'position': '-32.226742, 148.246664', 'title': 'Rotary Riverside Park, Narromine', 'text': 'Rotary Riverside Park, Narromine' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'mack', 'position': '-32.196242, 148.247581', 'title': 'Mack&rsquo;s Reserve', 'text': 'Mack&rsquo;s Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'turkey', 'position': '-32.142442, 148.233997', 'title': 'Turkey Farm Reserve', 'text': 'Turkey Farm Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'timbrebongie', 'position': '-32.131333, 148.246408', 'title': 'Timbrebongie Falls Reserve', 'text': 'Timbrebongie Falls Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'weir', 'position': '-31.937592, 148.141358', 'title': 'Gin Gin Weir', 'text': 'Gin Gin Weir' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'riverside', 'position': '-31.904656, 148.098200', 'title': 'Riverside access', 'text': 'Riverside access' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'gin', 'position': '-31.915883, 148.082517', 'title': 'Gin Gin Bridge Reserve', 'text': 'Gin Gin Bridge Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'rest', 'position': '-31.796111, 147.979722', 'title': 'Riverside Rest Area', 'text': 'Riverside Rest Area' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'warren', 'position': '-32.227100, 148.352958', 'title': 'Warren Weir Reserve - upstream', 'text': 'Warren Weir Reserve - upstream' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'victora',  'position': '-31.695536, 147.838031', 'title': 'Oxley Park - Macquarie Park - Ebert Park - Victoria Parks, Warren', 'text': 'Oxley Park - Macquarie Park - Ebert Park - Victoria Parks, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'brian', 'position': '-31.685056, 147.835917', 'title': 'Brian Egan Weir, Warren', 'text': 'Brian Egan Weir, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'fishing', 'icon': fishing, 'item': 'quinines', 'position': '-31.655992, 147.792636', 'title': 'Quinines Reserve, Warren', 'text': 'Quinines Reserve, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },

        {'group': 'boatramp', 'icon': boatramp, 'position': '-32.21039, 148.23812', 'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'boatramp', 'icon': boatramp, 'position': '-32.192102, 148.610495', 'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'boatramp', 'icon': boatramp, 'position': '-32.248102, 148.595737', 'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'boatramp', 'icon': boatramp, 'position': '-32.250138, 148.598792', 'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'boatramp', 'icon': boatramp, 'position': '-32.541935, 148.935469', 'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'boatramp', 'icon': boatramp, 'position': '-32.22588, 148.247326', 'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'boatramp', 'icon': boatramp, 'position': '-32.696519, 149.092608', 'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'boatramp', 'icon': boatramp, 'position': '-32.766391, 149.143586', 'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'boatramp', 'icon': boatramp, 'position': '-31.685998, 147.834187', 'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'info', 'icon': info, 'position': '-32.553037, 148.940964', 'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'info', 'icon': info, 'position': '-32.243408, 148.601667', 'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'info', 'icon': info, 'position': '-31.699748, 147.837154', 'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'info', 'icon': info, 'position': '-32.233914, 148.242014', 'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'rv', 'icon': rv, 'position': '-32.277955, 148.588445', 'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'rv', 'icon': rv, 'position': '-31.696939, 147.839889', 'bounds': false,'animation': google.maps.Animation.DROP },
        {'group': 'rv', 'icon': rv, 'position': '-32.553644, 148.928628', 'bounds': false,'animation': google.maps.Animation.DROP }
    ],

    defaultLat = -32.249085,    // Dubbo
    defaultLng = 148.604826,
    centerLat = defaultLat,
    centerLng = defaultLng,
    userLoc = new google.maps.LatLng( centerLat, centerLng ),
    knownLocation = false,

    fullLoad = false,
    loadingSingle = false,
    $page = $( this ),
    $canvas = $page.find( ".map_canvas" ),
    gmap = null,
    iscrollview = $page.find( ".iscroll-wrapper" ).data( "iscrollview" ),
    $to = $page.find( ".to" ),
    $toPretty = $page.find( ".toPretty" ),
    $from = $page.find( ".from" ),
    $fromPretty = $page.find( ".fromPretty" ),
    $directionsFields = $page.find( ".directionsFields" ),
    $markerList = $page.find( ".markerList"),
    markerListview = $markerList.data( "listview" ),
    $markerListNote = $page.find( ".markerListNote" ),
    $submitDirections = $page.find( ".submitDirections" ),
    $results = $page.find( ".results" ),
    $topMarkerNav = $page.find(".topMarkerNav"),
    $directions = $(".directions"),
    $activeGroupButton = null,
    infoBox = null,
    urlVars,
    selGroup,
    selItem,
    selLocation,
    selLocationMe,
    selTodo,

    $noLocationPopup = $(".no-location-popup"),

    markerListItemTemplate =
      '<li class="big-arrow" data-icon="false">' +
        '<a href="|link|">|itemtitle||distance|' +
          '<img src="../images/|pin|-pin.png" alt="|alt|" class="ui-li-icon trail-pin">' +
        '</a>' +
      '</li>';

    $canvas.gmap( { callback: function() {
      gmap = this;
      }
    });

    //---------------------------------------------  v
    $page.on("pageshow resize", function( event ) {
      gmap.refresh();
      iscrollview.refresh();
      });
    //-----------------------------------------------^

    //----------------------------------------------------------------v
    $page.on("pagebeforeshow", function( event ) {
      // attempt to get specifc marker data from item  page
      urlVars = getUrlVars();
      selGroup = urlVars["section"] || "";
      selItem = urlVars["item"] || "";
      selLocation = urlVars["location"] || "";
      selLocationMe = selLocation === "me";
      selTodo = urlVars["todo"];    // This one only, undefined if not present

      if (selTodo) {
        selTodo = parseInt(selTodo);  // Default to 0 (Favourites) if not an integer
      }

      loadingSingle = false;
      fullLoad = false;

      if ( selItem.length && selGroup.length ){
        loadingSingle = true;
        selTodo = undefined;
        }
      else if (selGroup.length) {
        selItem = "";
        selTodo = undefined;
        }
      else if (selTodo !== undefined) {

        }
      else {
        fullLoad = true;
        selItem = "";
        }

      // Set the appropriate tabbar button active
      if (selLocationMe) {
        $activeGroupButton = $page.find(".markerNav:jqmData(group=all)");
        $activeGroupButton.addClass("ui-btn-active");
        }
      else if (selGroup) {
        $activeGroupButton = $page.find(".markerNav:jqmData(group=" + selGroup + ")" );
        $activeGroupButton.addClass("ui-btn-active");
        }

      //-------------------------------------------------------v
      $.each( markers, function(i, marker) {
        if ( ( (selTodo === undefined) &&
               (!selItem.length || selItem === marker.item) && // Test marker/group
               (!selGroup.length || selGroup === marker.group)
             )  ||
             ( ( selTodo !== undefined ) && (localStore.isInList(selTodo, marker.group, marker.item)  === selTodo) )
           ) {
           if ( selItem === marker.item && selGroup === marker.group) {
             $to.attr("value",  marker.position);
             $toPretty.attr("value", marker.title);
           }
           //------------------------------------------v
           gmap.addMarker( {
               position: marker.position,
               bounds: true,
               icon: marker.icon,
               group: marker.group,
               mTitle: marker.title,
               mLink: markerLink(marker),
               } )
             .click(function() {
               openInfoWindow(marker, this);
               if (loadingSingle){
                 $to.attr("value",  marker.position);
                 $toPretty.attr("value", marker.title);
                 }
             });
           //-------- addMarker ------------------------^
          }
      });
      //--------------- each  --------------------------------^

    if (loadingSingle){
      resetMapForSingle();
      }

    addMyLocation(false);

    showMarkerList();

    gmap.refresh();

    iscrollview.refresh();
    });
    //--------------------- pagebeforeshow ---------------------------^

    // ---------- Top Navbar buttons. Shows markers for each trail ---v
    $page.on("vclick", ".markerNav", function( e ){
      var $button = $(this),
          selItem = $button.data( "group" );
      e.preventDefault();
      closeInfoWindow();
      if ($.activeGroupButton) {
        $activeGroupButton.removeClass("ui-btn-active");
        }
      $button.addClass("ui-btn-active");
      $activeGroupButton = $button;
      gmap.clear( "markers" );
      if ( selItem === "all" ){
        fullLoad = true;
        markerListULReset();
        }
      else {
          fullLoad = false;
        }

      $.each( markers, function(i, marker) {
        if ( marker.group === selItem || selItem === "all" ){
          gmap.addMarker( {
            position: marker.position,
            bounds: true,
            icon: marker.icon,
            group: marker.group,
            mTitle: marker.title,
            mLink: markerLink(marker),
            }).click(function() {
              openInfoWindow(marker, this);
              if (loadingSingle){
                $to.attr("value",  marker.position);
                $toPretty.attr("value", marker.title);
                }
              });
          }
        });
      addMyLocation(false);
      showMarkerList();
    });

  var closeInfoWindow = function() {
    if (infoBox) {
      infoBox.close();
      infoBox = null;
    }
  };

  var openInfoWindow = function(marker, markerElement) {
    var $box = $('<div class="inner"><a href="' + markerLink(marker) + '">'  + marker.title + '</a></div>'),
        options = {
          content: $box[0],
          closeBoxMargin: "14px 5px 2px 2px",
          closeBoxURL: "../images/298-circlex.png",
          };
    closeInfoWindow();
    infoBox = new InfoBox(options);
    infoBox.open(gmap.get('map'), markerElement);
  };

  var resetMapForSingle = function(){
    var thisMarker = gmap.get( "markers" );
    $topMarkerNav.height(0).hide().trigger("updatelayout");
    iscrollview.resizeWrapper();
    gmap.option( "zoom", 14 );
    $directionsFields.show();
    $(".mapsheader h1").text("Directions");
    };

  var showMarkerList = function(){
    var myMarkers = null;
    markerListULReset();
    myMarkers = gmap.get( "markers" );
    $.each( myMarkers, function(i, tmarker) {
        buildMarkerULList(tmarker.mTitle, tmarker.mLink, tmarker.position, tmarker.group);
      });

      // sort list by nearest and apply jQuery Mobile UI
      var $markerListItems = $markerList.find("li");
      $markerListItems.tsort("span.ml-sort");
      markerListview.refresh();
      $markerListNote.show();

    };

    var makePrettyAddress = function(loc, type) {
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode( {location: loc}, function(addresses ) {
        if (type === 1 ){
          $fromPretty.attr( "value", addresses[0].formatted_address);
          }
        else {
          $toPretty.attr( "value", addresses[0].formatted_address );
          }
        });
      };

    var addMyLocation = function(centerOnMe){
      gmap.getCurrentPosition( function(position, status) {

        if (status === "OK") {
          centerLat = position.coords.latitude;
          centerLng = position.coords.longitude;
          knownLocation = true;

          $from.val(centerLat + "," + centerLng );   // Set from field for directions

          var image = new google.maps.MarkerImage (
            "./images/bluedot_retina.png", null, null,
            new google.maps.Point( 8, 8 ),
            new google.maps.Size( 17, 17 )
            );

          gmap.addMarker( {
            icon: image,
            id: "client",
            position: userLoc,
            bounds: false,
            optimized: false,
            title: "My Location",
            visible: true,
            flat: true
            } );
            }

        else {
          centerLat = defaultLat;
          centerLng = defaultLng;
          knownLocation = false;

          $from.val("");    // Clear from field for directions

          $noLocationPopup.popup("open");
          setTimeout(function() { $noLocationPopup.popup("close"); }, 2500);
          }

        userLoc = new google.maps.LatLng( centerLat, centerLng );

        if (loadingSingle && knownLocation){
          makePrettyAddress(userLoc, 1);
          }

        gmap.option( "center", userLoc );
        gmap.option( "zoom", 6 );

      });
    };

    $submitDirections.on("click",  function () {
      gmap.displayDirections ( {
        origin: $from.val(),
        destination: $to.val(),
        travelMode: google.maps.DirectionsTravelMode.DRIVING
        },
        { panel: $directions[0] },
        function (success, response) {
          if (success) {
            $results.show();
            iscrollview.refresh();
            }
          else {
            $results.hide();
            iscrollview.refresh();
            }
        });
      return false;
    });

    var buildMarkerULList = function( item, link, position, group ) {

      var endRes = userLoc ? getMarkerDistance( position.Xa, position.Ya, userLoc.Xa, userLoc.Ya ) : null,
          base = markerListItemTemplate,
          groupUC = group.charAt().toUpperCase() + group.slice(1);

      if (group === "rv" || group === "boatramp" || group === "info" ) {
        return;
        }

      base = base.replace( "|pin|", groupUC);
      base = base.replace( "|alt|", groupUC);

      endRes = Math.round( endRes*10 ) / 10;

      if ( link != "" ){
        base = base.replace( "|link|", link);
        }
      else {
        base = base.replace( "|link|", "#" );
        }
      if (endRes) {
        base = base.replace( "|itemtitle|", item);
        base = base.replace("|distance|", '<span class="ui-li-count"><span class="ml-sort">' + endRes + "</span>km</span>" );
        }
      else {
        base = base.replace( "|itemtitle|", '<span class="ml-sort">' + item + "</span>" );
        base = base.replace("|distance|", "");
        }
      $markerList.append(base);
      };

    var markerListULReset = function() {
      $markerList.empty();
      $markerListNote.hide();
    };

    var getUrlVars = function()
      {
      var vars = [],
          hash,
          i,
          url = $page.data("url"),
          hashes = url.toLowerCase().slice(url.indexOf("?") + 1).split("&");
      for(i = 0; i < hashes.length; i++) {
        hash = hashes[i].split("=");
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
        }
      return vars;
      };

    var markerLink = function(marker) {
      var group = marker.group,
          dir = group.charAt(0).toUpperCase() + group.slice(1);
      return "../" + dir + "/" + marker.item + ".html";
      };

  });

  /* End $(document).on("pageinit", ".map-page") */

});
