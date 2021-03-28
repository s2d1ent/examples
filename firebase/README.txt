firebase-examples and configDBF must add in end <body>
all from 8.2.9 or any folder , if i will add new version, in you needs you must add in <head>
example:
<!DOCTYPE html>
<html>
<head>
  <title>FireBase</title>
  <!-- firebase not necessarily -->
  <script type="text/javascript" src="firebase/firebase-app.js"></script>
  <script type="text/javascript" src="firebase/firebase-auth.js"></script>
  <script type="text/javascript" src="firebase/firebase-firestore.js"></script>
  <script type="text/javascript" src="firebase/firebase-database.js"></script>
  <!-- style not necessarily -->
  <link rel="stylesheet" href="*/style/header__and__footer.css">
  <link rel="stylesheet" href="style/index.css">
  <link rel="stylesheet" href="style/index__mobile.css">
  <!-- fonts -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;1,500&display=swap" rel="stylesheet">
  <!-- settings not necessarily -->
  <link rel="shortcut icon" href="src/favicon.png">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<h1>Hello world!</h1>
<div>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed molestie lectus. Etiam eget nibh massa. Duis condimentum sit amet erat quis imperdiet. Praesent scelerisque feugiat velit, vitae rutrum diam faucibus non. Aenean ut nunc ut eros lacinia efficitur at et metus. Donec pulvinar at ipsum a pharetra. Cras lacinia ipsum ut nibh consequat pharetra. Proin quis eros in nulla fringilla pretium non sit amet augue. Nullam eget ex ac est molestie fermentum eget sit amet tellus. Duis posuere venenatis sagittis.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean nec lorem consequat, consectetur arcu vitae, placerat lectus. Phasellus laoreet erat non enim imperdiet ultrices. Phasellus finibus eu justo eu lacinia. Proin porta dapibus hendrerit. Mauris vulputate libero urna, eget feugiat ligula aliquam eu. Vivamus eleifend eget metus in ornare. Cras viverra mauris sit amet mi vehicula accumsan. Sed sit amet luctus felis, in euismod risus. Nam aliquam dolor quis rhoncus porta. Donec nec nibh at risus condimentum mattis. Curabitur consequat magna vitae urna facilisis maximus. Proin commodo erat id sodales faucibus. Maecenas vehicula consectetur viverra. Sed suscipit, odio nec fringilla luctus, tellus dui faucibus purus, non rutrum arcu arcu ac magna. Pellentesque faucibus enim a augue pellentesque imperdiet.

Nam euismod in massa non tempus. In sit amet gravida ipsum. Pellentesque ac odio iaculis elit pellentesque auctor. Etiam nec tortor vel justo ultricies vulputate. Praesent sollicitudin ligula id auctor vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse dapibus urna ac leo auctor mattis. Mauris quis velit accumsan, dapibus turpis et, cursus dui. Praesent luctus neque ullamcorper nisl sodales volutpat quis eu nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus id dolor a arcu mattis lobortis sit amet sit amet urna. Etiam et lectus nec massa efficitur ornare. Morbi id semper mi. Morbi a nisl egestas, elementum lectus et, aliquet sem. Sed pretium aliquet eros, vitae dapibus enim hendrerit a. Duis at finibus justo. Curabitur cursus lorem eget ex semper, in volutpat magna condimentum. Ut diam massa, suscipit nec porta at, maximus ac justo. Cras sollicitudin libero non justo bibendum tempus. Maecenas ac tortor sed nulla dictum congue.
</div>


<script type="text/javascript" src="firebase/configDFB.js"></script>
<script type="text/javascript" src="firebase/firebase-example.js"></script>
</body>
</html>
