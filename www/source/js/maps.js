$(function() {
  var cycle = new google.maps.MarkerImage('images/Cycle-pin.png', new google.maps.Size(30,42), new google.maps.Point(0,0), new google.maps.Point(10,10));
  var heritage = new google.maps.MarkerImage('images/Heritage-pin.png', new google.maps.Size(30,42), new google.maps.Point(0,0), new google.maps.Point(10,10));
  var nature = new google.maps.MarkerImage('images/Nature-pin.png', new google.maps.Size(30,42), new google.maps.Point(0,0), new google.maps.Point(10,10));
  var produce = new google.maps.MarkerImage('images/Produce-pin.png', new google.maps.Size(30,42), new google.maps.Point(0,0), new google.maps.Point(10,10));
  var river = new google.maps.MarkerImage('images/River-pin.png', new google.maps.Size(30,42), new google.maps.Point(0,0), new google.maps.Point(10,10));
  var riverbedz = new google.maps.MarkerImage('images/Riverbedz-pin.png', new google.maps.Size(30,42), new google.maps.Point(0,0), new google.maps.Point(10,10));
  var fishing = new google.maps.MarkerImage('images/Fishing-pin.png', new google.maps.Size(30,42), new google.maps.Point(0,0), new google.maps.Point(10,10));
  var shadow = new google.maps.MarkerImage('images/shadow.png', new google.maps.Size(30,42), new google.maps.Point(0,0), new google.maps.Point(10, 10));

  var markers = [
     {'group': 'cycle', 'icon': cycle, 'link': '../Cycle/geurie.html',  'position': '-32.400028, 148.818317', 'title': 'Geurie-Bald Hill Mountain Bike Trails', 'text': 'Geurie-Bald Hill Mountain Bike Trails' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'cycle', 'icon': cycle, 'link': '../Cycle/beni.html', 'position': '-32.246925, 148.72464', 'title': 'Beni State Conservation Area cycling, Dubbo', 'text': 'Beni State Conservation Area cycling, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'cycle', 'icon': cycle, 'link': '../Cycle/powterpark.html', 'position': '-32.239314, 148.611986', 'title': 'Powter Park BMX Track, Dubbo', 'text': 'Powter Park BMX Track, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'cycle', 'icon': cycle, 'link': '../Cycle/muggahill.html',  'position': '-32.225101, 148.663177', 'title': '<br>Mugga Hill Mountain Bike Park, Dubbo', 'text': 'Mugga Hill Mountain Bike Park, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'cycle', 'icon': cycle, 'link': '../Cycle/trackerhill.html',  'position': '-32.256086, 148.589706', 'title': 'Tracker Riley Cycleway and Walking Trail, Dubbo', 'text': 'Tracker Riley Cycleway and Walking Trail, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'cycle', 'icon': cycle,  'link': '../Cycle/warrens.html', 'position': '-31.706786, 147.842214', 'title': 'Warrens walking and cycling tracks', 'text': 'Warrens walking and cycling tracks' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'produce', 'icon': produce, 'link': '../Produce/edgertonnursery.html',  'position': '-32.230047, 148.239667', 'title': 'Edgerton Nursery, Narromine', 'text': 'Edgerton Nursery, Narromine' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'produce', 'icon': produce, 'link': '../Produce/andonbel.html',  'position': '-32.252942, 148.264381', 'title': 'Andonbel Alpacas and Coffee Shop, Narromine', 'text': 'Andonbel Alpacas and Coffee Shop, Narromine' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'produce', 'icon': produce, 'link': '../Produce/cottagecraft.html',  'position': '-32.23074, 148.240036', 'title': 'Narromine Cottage Craft Shop', 'text': 'Narromine Cottage Craft Shop' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'produce', 'icon': produce, 'link': '../Produce/woodshed.html',  'position': '-32.232971, 148.240082', 'title': 'The Woodshed Gallery, Narromine', 'text': 'The Woodshed Gallery, Narromine' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'produce', 'icon': produce, 'link': '../Produce/ewetwo.html',  'position': '-32.033397, 147.985794', 'title': 'Ewe Two, Trangie', 'text': 'Ewe Two, Trangie' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'produce', 'icon': produce, 'link': '../Produce/bellriver.html',  'position': '-32.687631, 148.945311', 'title': 'Bell River Estate, Wellington,', 'text': 'Bell River Estate, Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'produce', 'icon': produce, 'link': '../Produce/cactuscafe.html',  'position': '-32.551264, 148.942136', 'title': 'Cactus Cafe and Gallery, Wellington', 'text': 'Cactus Cafe and Gallery, Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'produce', 'icon': produce, 'link': '../Produce/lazyriver.html',  'position': '-32.296532, 148.627426', 'title': 'Lazy River Estate, Dubbo', 'text': 'Lazy River Estate, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'produce', 'icon': produce, 'link': '../Produce/farmers.html',  'position': '-32.243450, 148.601672', 'title': 'Farmers Market, Dubbo', 'text': 'Farmers Market, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'produce', 'icon': produce, 'link': '../Produce/redearth.html',  'position': '-32.293483, 148.585164', 'title': 'Red Earth Estate, Dubbo', 'text': 'Red Earth Estate, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'produce', 'icon': produce, 'link': '../Produce/limegrove.html',  'position': '-32.191757, 148.189713', 'title': 'Lime Grove, Narromine', 'text': 'Lime Grove, Narromine' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'produce', 'icon': produce, 'link': '../Produce/macquariegrove.html',  'position': '-32.21899, 148.241791', 'title': 'Macquarie Grove Vineyard, Narromine', 'text': 'Macquarie Grove Vineyard, Narromine' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'produce', 'icon': produce, 'link': '../Produce/tilleyswines.html',  'position': '-31.711003, 147.845267', 'title': 'Tilleys Wines, Warren', 'text': 'Tilleys Wines, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'heritage', 'icon': heritage, 'link': '../Heritage/cavesbottle.html',  'position': '-32.620367, 148.939019', 'title': 'Caves Bottle House, Wellington', 'text': 'Caves Bottle House, Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'heritage', 'icon': heritage, 'link': '../Heritage/peterbrowne.html',  'position': '-33.089809, 148.869247', 'title': 'Peter Browne Studio Gallery, Molong', 'text': 'Peter Browne Studio Gallery, Molong' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'heritage', 'icon': heritage, 'link': '../Heritage/erisfleming.html',  'position': '-32.758392, 148.928178', 'title': 'Eris Fleming Gallery, Wellington', 'text': 'Eris Fleming Gallery, Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'heritage', 'icon': heritage, 'link': '../Heritage/oxley.html', 'position': '-32.551336, 148.942775', 'title': 'Oxley Museum, Wellington', 'text': 'Oxley Museum, Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'heritage', 'icon': heritage, 'link': '../Heritage/billoshea.html',  'position': '-32.256493, 148.646622', 'title': 'Bill O Sheas Studio Gallery, Dubbo', 'text': 'Bill O Sheas Studio Gallery, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'heritage', 'icon': heritage, 'link': '../Heritage/loungegallery.html',     'position': '-32.244167, 148.582703', 'title': 'Lounge Gallery and Cafe, Dubbo', 'text': 'Lounge Gallery and Cafe, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'heritage', 'icon': heritage, 'link': '../Heritage/hermitagehill.html',  'position': '-32.560369, 148.960497', 'title': 'Hermitage Hill Resort', 'text': 'Hermitage Hill Resort' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'heritage', 'icon': heritage, 'link': '../Heritage/gratton.html',  'position': '-32.286239, 148.602864', 'title': 'Tim Gratton & Dundullimal', 'text': 'Tim Gratton & Dundullimal' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'heritage', 'icon': heritage, 'link': '../Heritage/wellingtoncaves.html',  'position': '-32.620994, 148.938186', 'title': 'Wellington Caves Phosphate Mine and Osawano Japanese Gardens', 'text': 'Wellington Caves Phosphate Mine and Osawano Japanese Gardens' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'heritage', 'icon': heritage, 'link': '../Heritage/lion.html',  'position': '-32.540578, 148.930692', 'title': 'Lion of Waterloo country pub, Wellington', 'text': 'Lion of Waterloo country pub, Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'heritage', 'icon': heritage, 'link': '../Heritage/garlinggallery.html', 'position': '-32.334639, 148.759894', 'title': 'Garling Gallery, Wongarbon', 'text': 'Garling Gallery, Wongarbon' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'heritage', 'icon': heritage, 'link': '../Heritage/dundullimal.html',  'position': '-32.286239, 148.602864', 'title': 'Dundullimal Homestead Dubbo', 'text': 'Dundullimal Homestead Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'heritage', 'icon': heritage, 'link': '../Heritage/pioneer.html',  'position': '-32.302008, 148.625236', 'title': 'Pioneer cemetery, Dubbo', 'text': 'Pioneer cemetery, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'heritage', 'icon': heritage, 'link': '../Heritage/westernplains.html',  'position': '-32.249912, 148.609604', 'title': 'Western Plains Cultural Centre, Dubbo', 'text': 'Western Plains Cultural Centre, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'heritage', 'icon': heritage, 'link': '../Heritage/gaol.html',  'position': '-32.245766, 148.601624', 'title': 'Old Dubbo Gaol', 'text': 'Old Dubbo Gaol' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'heritage', 'icon': heritage, 'link': '../Heritage/shoyeon.html',  'position': '-32.253908, 148.634189', 'title': 'Shoyeon Japanese Garden, Dubbo', 'text': 'Shoyeon Japanese Garden, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'heritage', 'icon': heritage, 'link': '../Heritage/aviation.html',  'position': '-32.222778, 148.229125', 'title': 'Narromine Aviation Museum', 'text': 'Narromine Aviation Museum' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'heritage', 'icon': heritage, 'link': '../Heritage/woodshed.html', 'position': '-32.232971, 148.240082', 'title': 'The Woodshed Gallery, Narromine', 'text': 'The Woodshed Gallery, Narromine' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'nature', 'icon': nature, 'link': '../Nature/burrendonggarden.html',  'position': '-32.688297, 149.108519', 'title': 'Burrendong Botanic Garden and Arboretum', 'text': 'Burrendong Botanic Garden and Arboretum' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'nature', 'icon': nature, 'link': '../Nature/tarongazoo.html',  'position': '-32.272233, 148.586328', 'title': 'Taronga Western Plains Zoo, Dubbo', 'text': 'Taronga Western Plains Zoo, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'nature', 'icon': nature, 'link': '../Nature/dubbobotanic.html',  'position': '-32.253117, 148.635050', 'title': 'Dubbo Regional Botanic Garden', 'text': 'Dubbo Regional Botanic Garden' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'nature', 'icon': nature, 'link': '../Nature/wongarbon.html',  'position': '-32.330067, 148.767014', 'title': 'Wongarbon Tank Reserve', 'text': 'Wongarbon Tank Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'nature', 'icon': nature, 'link': '../Nature/rotarywetland.html',  'position': '-32.247919, 148.236222', 'title': 'Rotary Wetland, Narromine', 'text': 'Rotary Wetland, Narromine' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'nature', 'icon': nature, 'link': '../Nature/argonauts.html',  'position': '-32.031326, 147.987045', 'title': 'Argonauts Park-Goan Waterhole, Trangie', 'text': 'Argonauts Park-Goan Waterhole, Trangie' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'nature', 'icon': nature, 'link': '../Nature/tigerbay.html',  'position': '-31.694647, 147.842550', 'title': 'Tiger Bay Wetland, Warren', 'text': 'Tiger Bay Wetland, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'nature', 'icon': nature, 'link': '../Nature/wetlandviewing.html',  'position': '-30.880064, 147.697353', 'title': 'Wetland viewing platform Macquarie Marshes', 'text': 'Wetland viewing platform Macquarie Marshes' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'nature', 'icon': nature, 'link': '../Nature/willieretreat.html', 'position': '-30.898687, 147.465805', 'title': 'Willie Retreat Macquarie Marshes', 'text': 'Willie Retreat Macquarie Marshes' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'nature', 'icon': nature, 'link': '../Nature/platypus.html',  'position': '-32.553092, 148.941039', 'title': 'Platypus spotting, Wellington', 'text': 'Platypus spotting, Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'nature', 'icon': nature, 'link': '../Nature/mountarther.html',  'position': '-32.553067, 148.916225', 'title': 'Mount Arthur Reserve and Lookout, Wellington', 'text': 'Mount Arthur Reserve and Lookout, Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'nature', 'icon': nature, 'link': '../Nature/macquariemarshsouth.html',  'position': '-30.924103, 147.459008', 'title': 'South Macquarie Marsh Nature Reserve', 'text': 'South Macquarie Marsh Nature Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'nature', 'icon': nature, 'link': '../Nature/macquariemarshnorth.html',  'position': '-30.814878, 147.500178', 'title': 'North Macquarie Marsh Nature Reserve', 'text': 'North Macquarie Marsh Nature Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'nature', 'icon': nature, 'link': '../Nature/touristpark.html',  'position': '-32.223497, 148.229931', 'title': 'Scenic helicopter rides over the Macquarie Marshes', 'text': 'Macquarie Marsh Nature Reserves' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'river', 'icon': river, 'link': '../River/mookereawa.html', 'position': '-32.770344, 149.148642', 'title': 'Mookerawa Waters State Park Lake Burrendong', 'text': 'Mookerawa Waters State Park Lake Burrendong' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'river', 'icon': river, 'link': '../River/johnoxley.html', 'position': '-32.542912, 148.933151', 'title': 'John Oxley Park, Wellington', 'text': 'John Oxley Park, Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'river', 'icon': river, 'link': '../River/cameronpark.html',  'position': '-32.553005, 148.941086', 'title': 'Cameron and Pioneer Park, Wellington', 'text': 'Cameron and Pioneer Park, Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'river', 'icon': river, 'link': '../River/sirrodenpark.html',  'position': '-32.255192, 148.588318', 'title': 'Sir Roden Cutler Park, Dubbo', 'text': 'Sir Roden Cutler Park, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'river', 'icon': river, 'link': '../River/riverbankpark.html',  'position': '-32.246338, 148.599518', 'title': 'Riverbank Park, Dubbo', 'text': 'Platypus spotting, Wellington ' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'river', 'icon': river, 'link': '../River/lionspark.html',  'position': '-32.249222, 148.594892', 'title': 'Lions Park West Dubbo', 'text': 'Lions Park West, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'river', 'icon': river, 'link': '../River/langleys.html',  'position': '-32.246685, 148.599045', 'title': 'Langleys River Cruises, Dubbo', 'text': 'Langleys River Cruises, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'river', 'icon': river, 'link': '../River/sandycreek.html',  'position': '-31.748814, 147.783692', 'title': 'Sandy Creek Rest Area, Warren', 'text': 'Sandy Creek Rest Area, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'river', 'icon': river, 'link': '../River/lionmacquarieparks.html',    'position': '-31.703211, 147.83931', 'title': 'Lions Park, Warren', 'text': 'Lions Park, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'river', 'icon': river, 'link': '../River/otherpark.html',    'position': '-31.698100, 147.838717', 'title': 'Macquarie Park, Warren', 'text': 'Macquarie Park, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'river', 'icon': river, 'link': '../River/moreparks.html',  'position': '-31.695536, 147.838031', 'title': 'Victoria Park and Oval, Warren', 'text': 'Victoria Park and Oval, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'river', 'icon': river, 'link': '../River/ebertpark.html',  'position': '-31.699581, 147.839622', 'title': 'Ebert Park, Warren', 'text': 'Ebert Park, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'river', 'icon': river, 'link': '../River/oxleypark.html',  'position': '-31.696989, 147.839881', 'title': 'Oxley Park, Warren', 'text': 'Oxley Park, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'river', 'icon': river, 'link': '../River/orchardpark.html',  'position': '-31.700569, 147.842375', 'title': 'Orchard Street Park, Warren', 'text': 'Orchard Street Park, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'river', 'icon': river, 'link': '../River/willieretreat.html',  'position': '-30.898687, 147.465805', 'title': 'Willie Retreat Macquarie Marshes', 'text': 'Willie Retreat Macquarie Marshes' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'river', 'icon': river, 'link': '../River/riversidetp.html',  'position': '-31.558367, 147.180984', 'title': 'Nyngan Riverside Tourist Park', 'text': 'Nyngan Riverside Tourist Park' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'river', 'icon': river, 'link': '../River/sport.html', 'position': '-32.707633, 149.1149946', 'title': 'Lake Burrendong Sport and Recreation', 'text': 'Lake Burrendong Sport and Recreation' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'river', 'icon': river, 'link': '../River/wellingtoncp.html', 'position': '-32.542417, 148.942706', 'title': 'Wellington Riverside Caravan Park', 'text': 'Wellington Riverside Caravan Park' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'river', 'icon': river, 'link': '../River/terramungamine.html',  'position': '-32.168713, 148.585022', 'title': 'Terramungamine Reserve, Dubbo', 'text': 'Terramungamine Reserve, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'river', 'icon': river, 'link': '../River/sandybeach.html',  'position': '-32.256325, 148.590622', 'title': 'Sandy Beach, Dubbo', 'text': 'Sandy Beach, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'river', 'icon': river, 'link': '../River/rotarypark.html',  'position': '-32.226742, 148.246664', 'title': 'Rotary Riverside Park, Narromine', 'text': 'Rotary Riverside Park, Narromine' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'river', 'icon': river, 'link': '../River/macquairecp.html',  'position': '-31.695214, 147.8398086', 'title': 'Macquarie Caravan Park, Warren', 'text': 'Macquarie Caravan Park, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'river', 'icon': river, 'link': '../River/macquairecanoe.html',  'position': '-32.542912, 148.933151', 'title': 'Macquarie river canoe and kayak trail', 'text': 'Macquarie river canoe and kayak trail' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'river', 'icon': river, 'link': '../River/big4.html',  'position': '-32.257458, 148.587414', 'title': 'BIG 4 Parklands, Dubbo', 'text': 'BIG 4 Parklands, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'river', 'icon': river, 'link': '../River/lakeburrendong.html',  'position': '-32.688095, 149.108505', 'title': 'Lake Burrendong State Park', 'text': 'Lake Burrendong State Park' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'riverbedz', 'icon': riverbedz, 'link': '../Riverbedz/abeltasman.html',  'position': '-32.254986, 148.587600', 'title': 'Abel Tasman Motor Inn, Dubbo', 'text': 'Abel Tasman Motor Inn, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'riverbedz', 'icon': riverbedz, 'link': '../Riverbedz/bridgemotel.html',  'position': '-32.544325, 148.941369', 'title': 'Bridge Motel, Wellington', 'text': 'Bridge Motel, Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'riverbedz', 'icon': riverbedz, 'link': '../Riverbedz/willieretreat.html',  'position': '-30.898687, 147.465805', 'title': 'Willie Retreat Macquarie Marshes', 'text': 'Willie Retreat Macquarie Marshes' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'riverbedz', 'icon': riverbedz, 'link': '../Riverbedz/lakeburrendong.html',  'position': '-32.688095, 149.108505', 'title': 'Lake Burrendong State Park', 'text': 'Lake Burrendong State Park' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'riverbedz', 'icon': riverbedz, 'link': '../Riverbedz/big4.html',  'position': '-32.257458, 148.587414', 'title': 'BIG 4 Parklands, Dubbo', 'text': 'BIG 4 Parklands, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'riverbedz', 'icon': riverbedz, 'link': '../Riverbedz/wellingtoncp.html',  'position': '-32.542417, 148.942706', 'title': 'Wellington Riverside Caravan Park', 'text': 'Wellington Riverside Caravan Park' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'riverbedz', 'icon': riverbedz, 'link': '../Riverbedz/hermitagehill.html', 'position': '-32.560369, 148.960497', 'title': 'Hermitage Hill Country Retreat and Function Centre, Wellington', 'text': 'Hermitage Hill Country Retreat and Function Centre, Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'riverbedz', 'icon': riverbedz, 'link': '../Riverbedz/macquairecp.html',  'position': '-31.695214, 147.839808', 'title': 'Macquarie Caravan Park, Warren', 'text': 'Macquarie Caravan Park, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'riverbedz', 'icon': riverbedz, 'link': '../Riverbedz/riversidetp.html',  'position': '-31.558367, 147.180984', 'title': 'Nyngan Riverside Tourist Park', 'text': 'Nyngan Riverside Tourist Park' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'riverbedz', 'icon': riverbedz, 'link': '../Riverbedz/touristpark.html',  'position': '-32.223497, 148.229931', 'title': 'Tourist Park & Motel, Narromine', 'text': 'Tourist Park & Motel, Narromine' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'riverbedz', 'icon': riverbedz, 'link': '../Riverbedz/peppercorn.html',  'position': '-32.225553, 148.238061', 'title': 'Peppercorn Motor Inn, Narromine', 'text': 'Peppercorn Motor Inn, Narromine' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/mookerawa.html',  'position': '-32.770344, 149.148642', 'title': 'Mookerawa Waters and Lake Burrendong State Parks, near Wellington', 'text': 'Mookerawa Waters and Lake Burrendong State Parks, near Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/johnoxley.html', 'position': '-32.542912, 148.933151', 'title': 'John Oxley Park, Wellington', 'text': 'John Oxley Park, Wellington' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/ponto.html', 'position': '-32.465889, 148.820753', 'title': 'Ponto Falls Reserve', 'text': 'Ponto Falls Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishings/scabbing.html', 'position': '-32.430489, 148.810336', 'title': 'Scabbing Flat Reserve, Geurie Bridge', 'text': 'Scabbing Flat Reserve, Geurie Bridge' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/peach.html', 'position': '-32.447453, 148.776808', 'title': 'Peach Trees Reserve', 'text': 'Peach Trees Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/bril.html', 'position': '-32.414511, 148.724722', 'title': 'Bril Bral Reserve', 'text': 'Bril Bral Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/butler.html', 'position': '-32.314511, 148.621225', 'title': 'Butler&rsquo;s Falls Reserve', 'text': 'Butler&rsquo;s Falls Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/pilcher.html', 'position': '-32.299411, 148.622853', 'title': 'Pilcher&rsquo;s Reserve', 'text': 'Pilcher&rsquo;s Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/caroline.html', 'position': '-32.294275, 148.627356', 'title': 'Caroline&rsquo;s Reserve', 'text': 'Caroline&rsquo;s Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/dundullimal.html', 'position': '-32.283044, 148.601728', 'title': 'Dundullimal Reserve', 'text': 'Dundullimal Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/sandybeach.html',  'position': '-32.256325, 148.590622', 'title': 'Sandy Beach, Dubbo', 'text': 'Sandy Beach, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/riverbankpark.html',  'position': '-32.246338, 148.599518', 'title': 'Riverbank Park, Dubbo', 'text': 'Platypus spotting, Wellington ' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/lionspark.html',  'position': '-32.249222, 148.594892', 'title': 'Lions Park West Dubbo', 'text': 'Lions Park West, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/devil.html', 'position': '-32.228244, 148.611044', 'title': 'Devil&rsquo;s Hole Reserve, Dubbo', 'text': 'Devil&rsquo;s Hole Reserve, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/terramungamine.html',  'position': '-32.168713, 148.585022', 'title': 'Terramungamine Reserve, Dubbo', 'text': 'Terramungamine Reserve, Dubbo' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/redbank.html', 'position': '-32.168867, 148.530711', 'title': 'Redbank Reserve', 'text': 'Redbank Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/north.html', 'position': '-32.172192, 148.510972', 'title': 'North Burrabadine Reserve', 'text': 'North Burrabadine Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/whylandra.html', 'position': '-32.189733, 148.495825', 'title': 'Whylandra Crossing Reserves', 'text': 'Whylandra Crossing Reserves' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/dickigundie.html', 'position': '-32.191972, 148.456272', 'title': 'Dickigundie Reserve', 'text': 'Dickigundie Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/minore.html', 'position': '-32.194422, 148.395839', 'title': 'Minore Falls Reserve', 'text': 'Minore Falls Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/brummagen.html', 'position': '-32.232447, 148.363664', 'title': 'Brummagen Bridge Reserve', 'text': 'Brummagen Bridge Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/reserve.html', 'position': '-32.227100, 148.352958', 'title': 'Brummagen Reserve', 'text': 'Brummagen Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/webb.html', 'position': '-32.243444, 148.295431', 'title': 'Webb&rsquo;s Siding Reserve, Narromine', 'text': 'Webb&rsquo;s Siding Reserve, Narromine' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/rotarypark.html',  'position': '-32.226742, 148.246664', 'title': 'Rotary Riverside Park, Narromine', 'text': 'Rotary Riverside Park, Narromine' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/mack.html', 'position': '-32.196242, 148.247581', 'title': 'Mack&rsquo;s Reserve', 'text': 'Mack&rsquo;s Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/turkey.html', 'position': '-32.142442, 148.233997', 'title': 'Turkey Farm Reserve', 'text': 'Turkey Farm Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/timbrebongie.html', 'position': '-32.131333, 148.246408', 'title': 'Timbrebongie Falls Reserve', 'text': 'Timbrebongie Falls Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/weir.html', 'position': '-31.937592, 148.141358', 'title': 'Gin Gin Weir', 'text': 'Gin Gin Weir' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/riverside.html', 'position': '-31.904656, 148.098200', 'title': 'Riverside access', 'text': 'Riverside access' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/gin.html', 'position': '-31.915883, 148.082517', 'title': 'Gin Gin Bridge Reserve', 'text': 'Gin Gin Bridge Reserve' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/rest.html', 'position': '-31.796111, 147.979722', 'title': 'Riverside Rest Area', 'text': 'Riverside Rest Area' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/warren.html', 'position': '-32.227100, 148.352958', 'title': 'Warren Weir Reserve &#45; upstream', 'text': 'Warren Weir Reserve &#45; upstream' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/victora.html',  'position': '-31.695536, 147.838031', 'title': 'Oxley Park &#45; Macquarie Park &#45; Ebert Park &#45; Victoria Parks, Warren', 'text': 'Oxley Park &#45; Macquarie Park &#45; Ebert Park &#45; Victoria Parks, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/brian.html', 'position': '-31.685056, 147.835917', 'title': 'Brian Egan Weir, Warren', 'text': 'Brian Egan Weir, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },
     {'group': 'fishing', 'icon': fishing, 'link': '../Fishing/quinines.html', 'position': '-31.655992, 147.792636', 'title': 'Quinines Reserve, Warren', 'text': 'Quinines Reserve, Warren' ,'bounds': false,'animation': google.maps.Animation.DROP },
   ];

  $(document).on( "pageinit", ".map-page", function() {
    var fullLoad = true,
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
        //$locationOnBtn = $page.find( ".locationonBtn" ),
        $markerList = $page.find( ".markerList"),
        $markerListItems = $markerList.find("li"),
        markerListview = $markerList.data( "listview" ),
        $markerListNote = $page.find( ".markerListNote" ),
        $submitDirections = $page.find( ".submitDirections" ),
        $results = $page.find( ".results" ),
        $directions = $(".directions"),
        userLoc = null,
        $activeGroupButton = null;

    $canvas.gmap( { callback: function() {
      gmap = this;

      google.maps.event.addListener(gmap, "zoom_changed", function() {
        showMarkerList();
        });

      google.maps.event.addListener(gmap, "center_changed", function() {
        showMarkerList();
        });

      }
    });

    $page.on("pageshow resize", function( event ) {
      gmap.refresh();
      iscrollview.refresh();
      });

    $page.on("pagebeforeshow", function( event ) {
      // attempt to get specifc marker data from item  page
      var selGroup = getUrlVars().section,
          selMarker = getUrlVars().item;
      loadingSingle = false;


    if ( (selMarker !== undefined && selMarker.length) && (selGroup !== undefined && selGroup.length) ){
      selGroup = selGroup.toLowerCase();
      selMarker = selMarker.toLowerCase();
      loadingSingle = true;
      fullLoad = false;
      }
    else {
      selGroup = "";
      selMarker = "";
      }

    if (getUrlVars().location === "me") {
      $activeGroupButton = $page.find(".markerNav:jqmData(group=all)");
      $activeGroupButton.addClass("ui-btn-active");
      }
    else if (selGroup) {
      $activeGroupButton = $page.find(".markerNav:jqmData(group=" + selGroup + ")" );
      $activeGroupButton.addClass("ui-btn-active");
      }

    $.each( markers, function(i, marker) {
      if ( (selMarker === "" || marker.link.indexOf(selMarker) >= 0) && (selGroup === "" || selGroup === marker.group) ) {
         if (marker.link.indexOf(selMarker) >= 0 && selGroup === marker.group) {
           $to.attr("value",  marker.position);
           $toPretty.attr("value", marker.title);
         }
         gmap.addMarker( {
             position: marker.position,
             bounds: true,
             icon: marker.icon,
             group: marker.group,
             mTitle: marker.title,
             mLink: marker.link
             } )
           .click(function() {
             openInfoWindow(marker, this);
             if (loadingSingle){
               $to.attr("value",  marker.position);
               $toPretty.attr("value", marker.title);
               }
           });
        }
    });

    if (loadingSingle){
      resetMapForSingle();
      }

    addMyLocation(false);

    gmap.refresh();
    iscrollview.refresh();
    });

    // Top Navbar buttons. Shows markers for each trail
    $page.on("vclick", ".markerNav", function( e ){
      var $button = $(this),
          selMarker = $button.data( "group" );
      e.preventDefault();
      if ($.activeGroupButton) {
        $activeGroupButton.removeClass("ui-btn-active");
        }
      $button.addClass("ui-btn-active");
      $activeGroupButton = $button;
      gmap.clear( "markers" );
      if ( selMarker === "all" ){
        fullLoad = true;
        markerListULReset();
        }
      else {
          fullLoad = false;
        }

      $.each( markers, function(i, marker) {
        if ( marker.group === selMarker || selMarker === "all" ){
          gmap.addMarker( {
            position: marker.position,
            bounds: true,
            icon: marker.icon,
            group: marker.group,
            mTitle: marker.title,
            mLink: marker.link
            }).click(function() {
              openInfoWindow(marker, this);
              if (loadingSingle){
                $to.attr("value",  marker.position);
                $toPretty.attr("value", marker.title);
                }
              });
          }
        });
      showMarkerList();
      addMyLocation(false);
    });

  var openInfoWindow = function(marker, markerElement) {
    var $box = $('<div class="inner"><a href="' + marker.link + '">'  + marker.title + '</a></div>'),
        options = {
          content: $box[0],
          closeBoxMargin: "14px 5px 2px 2px",
          closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
          },
        ib = new InfoBox(options);
    ib.open(gmap.get('map'), markerElement);
  };

  var resetMapForSingle = function(){
    var thisMarker = gmap.get( "markers" );
    //$( ".topMarkerNav" ).hide();
    //$locationOnBtn.hide();
    gmap.option( "zoom", 14 );
    $directionsFields.show();
    };

  var showMarkerList = function(){
    var itemInView = false,
        myMarkers = null;
    if (fullLoad){
      return false;
      }
    markerListULReset();
    myMarkers = gmap.get( "markers" );
    $.each( myMarkers, function(i, tmarker) {
      var isInViewport = gmap.inViewport( tmarker );
      if (isInViewport) {
        buildMarkerULList(tmarker.mTitle, tmarker.mLink, tmarker.position);
        itemInView = true;
        }
      });
    if (itemInView){
      // sort list by nearest and apply jQuery Mobile UI
      $markerListItems.tsort({attr: "sortid" });
      markerListview.refresh();
      $markerListNote.show();
      }
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
        if ( status === "OK" ) {
          userLoc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          $from.val(position.coords.latitude + "," + position.coords.longitude);
          var image = new google.maps.MarkerImage(
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
            flat: true } );
          if ( centerOnMe || getUrlVars().location === "me" ) {
            gmap.option( "center", userLoc );
            gmap.option( "zoom", 4 );
            }
          if (loadingSingle){
            makePrettyAddress(userLoc, 1);
            }
          }
        else {
          alert("Unable to get current position");
          }
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

    var buildMarkerULList = function( item, link, position ) {
      var endRes = getMarkerDistance( position.Xa, position.Ya, userLoc.Xa, userLoc.Ya ),
          base = '<li sortid="|sort|"><a href="|link|">|itemtitle| <span class="ui-li-count">|distance|km</span></a></li>';
      base = base.replace( "|itemtitle|", item );
      if ( link != "" ){
        base = base.replace( "|link|", link);
        }
      else {
        base = base.replace( "|link|", "#" );
        }
      endRes = parseFloat(endRes).toFixed(2);
      base = base.replace("|sort|", parseFloat(endRes));
      base = base.replace("|distance|", endRes);
      $markerList.append(base);
      };

    var markerListULReset = function(){
      $markerList.empty();
      $markerListNote.hide();
    }

    var getUrlVars = function()
      {
      var vars = [],
          hash,
          i,
          url = $page.data("url"),
          hashes = url.slice(url.indexOf("?") + 1).split("&");
      for(i = 0; i < hashes.length; i++) {
        hash = hashes[i].split("=");
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
        }
      return vars;
      };

  });

  /* End $(document).on("pageinit", ".map-page") */

});
