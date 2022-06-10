<php>
    <!DOCTYPE HTML>
    <html>

    <head>
        <link rel="stylesheet" href="style.css">


    </head>

    <!-- Include Font awesome cdn -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />

    <body>
        <!-- include javascript script.js-->

        <div class="drop-container">
            <div class="drop">
                <i class="fa-solid fa-photo-film icon"></i>
                <span class="text">
                Drag and drop your documents, photos, and video here.
            </span>
                <div class="or-con">
                    <span class="line"></span>
                    <span class="or">OR</span>
                    <span class="line"></span>
                </div>
                <label for="file-upload">Browse Files</label>
                <input type="file" id="file-upload" class="file-input" multiple />
            </div>
            <div class="progress"></div>
        </div>
        <script src="scriptq.js"></script>
    </body>

    </html>
</php>