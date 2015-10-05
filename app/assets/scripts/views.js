angular.module("SymplifyApp").run(["$templateCache", function($templateCache) {$templateCache.put("contrast.html","<div id=\"contrast\" class=\"page\">\n	<div class=\"section\">\n		<div class=\"inner\">\n			<form>\n				<div class=\"contrast-option\">\n					<select ng-model=\"contrast1\" ng-options=\"o as o for o in consonants\">\n					</select>	\n				</div>\n				<div class=\"contrast-option\">\n					<select ng-model=\"contrast2\" ng-options=\"o as o for o in consonants\">\n					</select>	\n				</div>\n				<div class=\"contrast-option\">\n					<select ng-model=\"contrast3\" ng-options=\"o as o for o in consonants\">\n					</select>	\n				</div>\n				<div class=\"contrast-option\">\n					<select ng-model=\"contrast4\" ng-options=\"o as o for o in consonants\">\n					</select>	\n				</div>\n				<div class=\"contrast-option\">\n					<select ng-model=\"contrast5\" ng-options=\"o as o for o in consonants\">\n					</select>	\n				</div>\n\n				<hr/>\n\n				<ul ng-repeat=\"item in output\">\n					<li>\n						<span ng-repeat=\"word in item\">{{ word }}, </span>\n					</li>\n				</ul>\n\n\n			</form>		\n		</div>\n	</div>\n</div>");
$templateCache.put("game.html","<div id=\"game\" class=\"page\">\n</div>");
$templateCache.put("home.html","<div id=\"home\" class=\"page\">\n	<div class=\"section\">\n		<div class=\"inner\">\n			<h2>Symplify</h2>\n\n		    <ul>\n		        <li><a href=\"/#/lists\">Symbol Lists</a></li>\n		    </ul>		\n		</div>\n	</div>\n    \n\n</div>");
$templateCache.put("lists.html","<div id=\"lists\" class=\"page\">\n\n	\n	<!-- NAV -->\n	<div class=\"section\">\n		<div class=\"inner\">\n			<nav class=\"subnav\">\n				<ul>\n					<li><a ng-click=\"changeView(\'browse\')\" ng-class=\"{ selected: view === \'browse\' }\">Browse</a></li>\n					<li><a ng-click=\"changeView(\'new\')\" ng-class=\"{ selected: view === \'new\' }\">Create New List</a></li>\n				</ul>\n			</nav>\n		</div>\n	</div>\n\n	<!-- New Lists -->\n	<div class=\"section\" ng-show=\"view === \'new\'\">\n		<div class=\"inner\">\n			<h2>New List</h2>\n\n			<form novalidate>\n				<div class=\"row\">\n					<input type=\"text\" placeholder=\"List name\" ng-model=\"newList.name\">\n				</div>\n				<div class=\"row\">\n					<input type=\"text\" placeholder=\"List type\" ng-model=\"newList.type\">\n				</div>\n				<div class=\"row\">\n					<input type=\"text\" placeholder=\"Search symbols\" ng-model=\"search\">\n				</div>\n				<div class=\"row\">\n					<ul class=\"symbols\">\n						<li class=\"symbol\" ng-repeat=\"symbol in results\" ng-click=\"toggleSymbol(symbol)\">\n							<img ng-src=\"http://symplifyapp.com/graphics/{{ symbol.gfx_filename }}\" />\n							<span class=\"word_text\">{{ symbol.word_text }}</span>\n						</li>\n					</ul>\n				</div>\n				<input type=\"submit\" ng-click=\"createList()\">\n			</form>\n			\n			<hr/>	\n\n			<h2>Selected symbols</h2>\n	\n			<div class=\"row\">\n				<ul class=\"symbols\">\n					<li class=\"symbol\" ng-repeat=\"symbol in newList.symbols\" ng-click=\"\">\n						<img ng-src=\"http://symplifyapp.com/graphics/{{ symbol.gfx_filename }}\" />\n						<span class=\"word_text\">{{ symbol.word_text }}</span>\n					</li>\n				</ul>\n			</div>\n		</div>\n	</div>\n\n\n	<!-- Browse existing lists -->\n	<div class=\"section\" ng-show=\"view === \'browse\'\">\n		<div class=\"inner\">\n			<h2>Browse lists</h2>\n			<form novalidate>\n				<div class=\"row\">\n					<select ng-model=\"current\" ng-init=\"init()\" ng-change=\"listChanged(data)\">\n						<option ng-repeat=\"list in lists\" value=\"{{ $index }}\">{{ list.name }}</option>\n					</select>\n				</div>\n			</form>\n			<ul class=\"symbols\">\n				<li class=\"symbol\" ng-repeat=\"symbol in list.symbols\">\n					<img ng-src=\"http://symplifyapp.com/graphics/{{ symbol.gfx_filename }}\" />\n					<span class=\"word_text\">{{ symbol.word_text }}</span>\n				</li>\n			</ul>\n		</div>\n	</div>\n	\n\n</div>");
$templateCache.put("login.html","<div id=\"home\" class=\"page\">\n\n	<div class=\"section\">\n		<div class=\"inner\">\n			<h1>Login</h1>\n\n			<form novalidate>\n				<div class=\"row\">\n					<label>Email</label><input type=\"text\" ng-model=\"user.email\">\n				</div>\n				<div class=\"row\">\n					<label>Password</label><input type=\"password\" ng-model=\"user.password\">\n				</div>\n				<input type=\"submit\" ng-click=\"attemptLogin(data)\">\n			</form>\n\n			<p>Not registered? <a ui-sref=\"register\">Sign up</a> here.</a>\n		</div>\n	</div>\n</div>");
$templateCache.put("register.html","<div id=\"home\" class=\"page\">\n\n	<div class=\"inner\">\n		<h1>Register</h1>\n		\n		<form novalidate>\n			<div class=\"row\">\n				<label>Username</label><input type=\"text\" ng-model=\"user.username\">\n			</div>\n			<div class=\"row\">\n				<label>Email Address</label><input type=\"text\" ng-model=\"user.email\">\n			</div>\n			<div class=\"row\">\n				<label>Password</label><input type=\"password\" ng-model=\"user.password\">\n			</div>\n			<div class=\"row\">\n				<label>Domain</label><input type=\"text\" ng-model=\"user.domain\">\n			</div>\n			<div class=\"row\">\n				<label>First name</label><input type=\"text\" ng-model=\"user.name_first\">\n			</div>\n			<div class=\"row\">\n				<label>Surname</label><input type=\"text\" ng-model=\"user.name_second\">\n			</div>\n			<input type=\"submit\" ng-click=\"register()\">\n		</form>\n	</div>\n\n</div>");
$templateCache.put("search.html","<div ng-controller=\"SearchController\" id=\"search\" class=\"page\">\n    <h2>Search</h2>\n    <form>\n        <!-- <input type=\"password\" id=\"password\" ng-model=\"password\" placeholder=\"password\"> -->\n        <input type=\"text\" id=\"searchterm\" ng-model=\"searchterm\" placeholder=\"Search\">\n    </form>\n    <ul id=\"symbols\">\n       <li ng-repeat=\"symbol in symbols\">\n           <img ng-src=\"http://symplifyapp.com/graphics/{{ symbol.gfx_filename }}\" style=\"display: block;\" />\n           <label>{{ symbol.word_text }}</label>\n       </li> \n    </ul>\n</div>");}]);