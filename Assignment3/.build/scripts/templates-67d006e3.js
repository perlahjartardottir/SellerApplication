angular.module("project3App").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!DOCTYPE html>\n<html ng-app=\"project3App\">\n<head>\n	<title>WEPO Assignment 3 - Online Web Store</title>\n	<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n	<meta charset=\"utf-8\">\n	<link rel=\"stylesheet\" href=\"styles/vendor.css\">\n	<link rel=\"stylesheet\" href=\"styles/app.css\">\n</head>\n\n<body >\n\n\n	<main class=\"container-fluid\">\n		<div class=\"Main clearfix\" ng-view id=\"content\"></div>\n	</main>\n\n\n	<toaster-container></toaster-container>\n\n\n\n\n	<!-- inject:vendor:js -->\n	<!-- endinject -->\n\n	<!-- inject:app:js -->\n	<!-- endinject -->\n\n	<!-- inject:templates:js -->\n	<!-- endinject -->\n\n	\n	<script src=\"https://rawgithub.com/PascalPrecht/bower-angular-translate-loader-static-files/master/angular-translate-loader-static-files.js\"></script>\n</body>\n\n</html>\n");
$templateCache.put("shared/notify/centris-notify-undo.tpl.html","<div class=\"{{toastClass}} {{toastType}}\" ng-click=\"tapToast()\">\n	<!-- Note: basically the same template as the default template,\n	     but with an added \"Undo\" button. Note: we don\'t assume that\n	     there will be any need for custom HTML in the title/message,\n	     so that support has been removed. -->\n	<div class=\"{{titleClass}}\"\n		translate=\"AppTitle\">\n	</div>\n	<div class=\"{{messageClass}}\">\n		{{title}}\n	</div>\n	<div>\n		<a class=\"centris-notify-undo pull-right\"\n			ng-click=\"centrisUndo(message.type, message.id)\"\n			translate=\"Undo\" />\n	</div>\n</div>");
$templateCache.put("shared/notify/centris-notify.tpl.html","<div class=\"{{toastClass}} {{toastType}}\" ng-click=\"tapToast()\">\n	<div class=\"{{titleClass}}\"\n		translate=\"AppTitle\">\n	</div>\n	<div class=\"{{messageClass}}\">\n		{{message}}\n	</div>\n</div>");
$templateCache.put("components/loading-message/loading.html","<uib-alert type=\"info\">\n	<span translate=\"shared.LoadingMessage\"/>\n</uib-alert>");
$templateCache.put("components/seller-details/sellerdetails.html","<div>\n		<!--<label translate=\"sellers.ChangeLanguage\"></label>-->\n	<button class=\"btn btn-primary\" ng-click=\"changeLanguage(\'is\')\">\n		<i class=\"fa fa-plus\" />\n		<span translate=\"sellers.Icelandic\" />\n	</button>\n\n		<button class=\"btn btn-primary\" ng-click=\"changeLanguage(\'en\')\">\n		<i class=\"fa fa-plus\" />\n		<span translate=\"sellers.English\" />\n	</button>\n\n	<button class=\"btn btn-primary\" ng-click=\"back()\">\n		<i class=\"fa fa-plus\" />\n		<span translate=\"sellerdetails.Back\" />\n	</button>\n\n	<img ng-src=\"{{seller.imagePath}}\" alt=\"Picture of a seller\"/>\n\n	<div>\n		<h2>{{seller.name}}</h2>\n		<h3>{{seller.category}}</h3>\n	</div>\n\n	<button class=\"btn btn-primary\" ng-click=\"onEditSeller(seller)\">\n		<i class=\"fa fa-plus\" />\n		<span translate=\"sellerdetails.Edit\" />\n	</button>\n</div>\n\n       ");
$templateCache.put("components/seller-dlg/seller-dlg.html","<form name=\"addForm\" novalidate ng-submit=\"onSubmit()\">\n	<fieldset>\n		<input type=\"text\"\n			name=\"name\"\n			ng-model=\"seller.name\" \n			placeholder=\"Name\" \n			required\n			ng-maxlength=\"32\"/>\n\n		<input type=\"text\"\n			name=\"category\"\n			ng-model=\"seller.category\" \n			placeholder=\"Category\"\n			required\n			ng-maxlength=\"32\"/>\n\n		<!--<input type=\"text\" \n			name=\"imagepath\" \n			ng-model=\"seller.imagepath\" />-->\n\n		<div ng-show=\"addForm.name.$invalid\">\n			<small>Name must have at least 1 letter and less than 33 letters</small>\n		</div>\n\n		<div ng-show=\"addForm.category.$invalid\">\n			<small>Category must at least 1 letter and less than 33 letters</small>\n		</div>\n\n		<button class=\"btn btn-primary\" ng-click=\"onSubmit()\">\n			<i class=\"fa fa-plus\" />\n			<span translate=\"seller-dlg.Add\" />\n		</button>\n\n		<button class=\"btn btn-primary\" ng-click=\"onCancel()\">\n			<i class=\"fa fa-plus\" />\n			<span translate=\"seller-dlg.Cancel\" />\n		</button>\n	</fieldset>\n</form>");
$templateCache.put("components/sellers/index.html","<div>\n	<div ng-show=\"isLoading\">\n		<loading-message></loading-message>\n	</div>\n\n	<button class=\"btn btn-primary\" ng-click=\"onAddSeller()\">\n		<i class=\"fa fa-plus\" />\n		<span translate=\"sellers.Add\" />\n	</button>\n\n	<!--<label translate=\"sellers.ChangeLanguage\"></label>-->\n	<button class=\"btn btn-primary\" ng-click=\"changeLanguage(\'is\')\">\n		<i class=\"fa fa-plus\" />\n		<span translate=\"sellers.Icelandic\" />\n	</button>\n\n		<button class=\"btn btn-primary\" ng-click=\"changeLanguage(\'en\')\">\n		<i class=\"fa fa-plus\" />\n		<span translate=\"sellers.English\" />\n	</button>\n\n	<div ng-hide=\"isLoading\">\n		<table style=\"width:75%\">\n			<thead>\n				<tr>\n					<th translate=\"sellers.Name\"></th>\n					<th translate=\"sellers.Category\"></th>		\n				</tr>\n			</thead>\n			<tbody>\n				<tr ng-repeat=\"s in seller\">\n					<td><a ng-href=\"#/seller/{{s.id}}\">{{s.name}}</a></td>\n					<td>{{s.category}}</td>\n				</tr>\n			</tbody>\n			<tr></tr>\n		</table>\n	</div>\n</div>\n");
$templateCache.put("components/sellers/index1.html","<div>\n	<div ng-show=\"isLoading\">\n		<loading-message></loading-message>\n	</div>\n\n	<div ng-hide=\"isLoading\">\n		<button class=\"btn btn-primary\" ng-click=\"onAddSeller()\">\n			<i class=\"fa fa-plus\" />\n			<span translate=\"sellers.Add\" />Add\n		</button>\n		<table>\n			<thead>\n				<tr>\n					<th translate=\"sellers.Name\">Name</th>\n					<th translate=\"sellers.Category\">Category</th>	\n\n					<!-- Ef eitthvað á að vera inn í <th> þa þarf að gera:\n					<th>\n						<i class=\"fa fa-plus\" /> - þetta myndi detta út nema nota:...\n						<span translate=\"sellers.Name\" />\n					</th>\n					<th>\n						<i class=\"fa fa-plus\" /> - þetta myndi detta út nema nota:...\n						<span translate=\"sellers.Category\" />\n					</th>	 -->\n				</tr>\n			</thead>\n			<tbody>\n				<tr ng-repeat=\"s in seller\">\n					<td>{{s.name}}</td>\n					<td>{{s.category}}</td>\n				</tr>\n			</tbody>\n			<tr></tr>\n		</table>\n	</div>\n</div>\n");}]);