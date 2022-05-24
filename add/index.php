<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Add Songs</title>
    <link rel="stylesheet" href="../dist/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
  </head>
  <body>
    <div class="password" id="password">
      <div class="form">
        <div class="row g-3">
          <div class="col-auto">
            <label class="visually-hidden">Password</label>
            <input type="text" type="password" class="form-control" id="password_input" placeholder="Password">
          </div>
          <div class="col-auto">
            <button class="btn btn-primary mb-3" onclick="check_pass()">Confirm identity</button>
          </div>
        </div>
      </div>
    </div>
    <main class="add-main">
        <form action="data.php" method="POST" enctype="multipart/form-data">
            <h1>ADD SONGS</h1>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Song name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" name="name" maxlength="19">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Song Artist</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" name="artist" maxlength="30">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Song Thumbnail</label>
                <input class="form-control" type="file" id="formFile" name="thumb">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Song File (mp3)</label>
                <input class="form-control" type="file" id="formFile" name="song">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    <script src="script.js"></script>
  </body>
</html>