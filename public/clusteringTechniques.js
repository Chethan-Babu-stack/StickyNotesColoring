function clusterColorStickies() {

    // We initially support 2 clusters
    // Cluster 1: Red
    // Cluster 2: Green
    // Cluster 3: Blue
    // Cluster 4: Yellow

    // Get the dimensions of the screen
    var height = window.screen.height;
    var width = window.screen.width;


    var c1_x1 = 0, c1_y1 = 0;
    var c1_xstart = 0, c1_ystart = 0;
    var c2_x1 = width / 2, c2_y1 = 0;
    var c3_x1 = 0, c3_y1 = height / 2;
    var c4_x1 = width / 2, c4_y1 = height / 2;

    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var values = localStorage.getItem(key);
        var value = JSON.parse(values);

        if (value[0].color == "#FFCCCC") {
            document.getElementById(key).style.left = c1_x1 + "px";
            document.getElementById(key).style.top = c1_y1 + "px";

            if ((c1_y1 + 180) < (height / 2)) {
                c1_y1 += 180;
            }
            else {
                c1_x1 += 180;
                c1_y1 = c1_ystart;
            }
            if ((c1_x1 + 180) > width / 2) {
                c1_xstart += 20;
                c1_ystart += 20;
                c1_x1 = c1_xstart;
                c1_y1 = c1_ystart;

            }

        }
        if (value[0].color == "#CCFFCC") {
            document.getElementById(key).style.left = c2_x1 + "px";
            document.getElementById(key).style.top = c2_y1 + "px";

            if ((c2_y1 + 180) < (height / 2)) {
                c2_y1 += 180;
            }
            else {
                c2_x1 += 180;
                c2_y1 = 0;
            }
        }
        if (value[0].color == "#99CCFF") {
            document.getElementById(key).style.left = c3_x1 + "px";
            document.getElementById(key).style.top = c3_y1 + "px";

            if ((c3_y1 + 180) < height) {
                c3_y1 += 180;
            }
            else {
                c3_x1 += 180;
                c3_y1 = height / 2;
            }
        }
        if (value[0].color == "#FFFFCC") {
            document.getElementById(key).style.left = c4_x1 + "px";
            document.getElementById(key).style.top = c4_y1 + "px";

            if ((c4_y1 + 180) < height) {
                c4_y1 += 180;
            }
            else {
                c4_x1 += 180;
                c4_y1 = height / 2;
            }
        }

    }
}