import fetch from 'node-fetch';
import * as http from 'http';
import url from 'url';

let name;
let size;
let date;
let poster;
let magnet;
let line;
let breake;
let bootstrap1;
let bootstrap2;
let bootstrap3;
let bootstrap4;
let bootstrap5;
let bootstrap6;
let bootstrap7;
let head_s;
let head_e;
let fontawesome;
let body_s;
let body_e;

http.createServer(function (req, res) {
    var q = url.parse(req.url, true).query;
    fetch('http://212.251.83.105:8080/api/v1/search?site=1337x&limit=20&query='+q.query)
        .then(res => res.json())
        .then(json => {
            head_s = "<head>";
            head_e = "</head>";
            body_s = "<body class=\"bg-light\">";
            body_e = "</body>";
            fontawesome = "<script src=\"https://kit.fontawesome.com/075596934d.js\" crossorigin=\"anonymous\"></script>";
            bootstrap1 = "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">";
            bootstrap2 = "<meta charset=\"utf-8\">";
            bootstrap3 = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">";
            bootstrap4 = "<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css\">";
            bootstrap5 = "<script src=\"https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js\"></script>";
            bootstrap6 = "<script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js\"></script>";
            bootstrap7 = "<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js\"></script>";
            res.write(head_s);
            res.write(bootstrap1);
            res.write(bootstrap2);
            res.write(bootstrap3);
            res.write(bootstrap4);
            res.write(bootstrap5);
            res.write(bootstrap6);
            res.write(bootstrap7);
            res.write(fontawesome);
            res.write(head_e);
            res.write(body_s);
            res.write("<a class=\"ml-4 mt-5 text-danger shadow-lg\" style=\"text-decoration:none;\" href=\"index.html\"><i style=\"background:none;\"class=\"shadow-lg fa-solid fa-arrow-left-long fa-2xl mt-4\"></i></a>");
            res.write('<div class=\"container mt-5\">');
            res.write('<div class=\"row\">');
            if (json.error == "no results found") {
                res.write("<div class='shadow-lg container-md pt-1 mt-3 bg-primary' style='border-radius:10px;width:450px;display:flex;align-items:center;justify-content:center;'>");
                res.write("<h3>No movies found</h3>.");
                res.write("</div>");
            }
            else {
                for (let i = 0; i < json.data.length; i++) {
                    name = '<h3 class=\"mx-auto card-title\">' + JSON.stringify(json.data[i].name).replace(/\"/g, "") + '</h3>';
                    size = '<p class=\"mx-auto card-text\">' + JSON.stringify(json.data[i].size).replace(/\"/g, "") + '</p>';
                    date = '<p class=\"mx-auto card-text\">' + JSON.stringify(json.data[i].date).replace(/\"/g, "") + '</p>';
                    poster = '<img class=\"mx-auto\" src=' + JSON.stringify(json.data[i].poster) + ' onerror="this.onerror=null;this.src=\'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg\';" width="123" height="182">';
                    magnet = '<a class=\"btn btn-primary\" href=' + JSON.stringify(json.data[i].magnet) + '>Download</a>';
                    breake = '<br>';
                    line = '<hr>';
                    res.write('<div class=\"card bg-warning m-3\" style=\"width:300px;\">');
                    res.write("<div class=\"card-body bg-warning\">");
                    res.write(name);
                    res.write(date);
                    res.write(poster);
                    res.write(breake);
                    res.write(size);
                    res.write(magnet);
                    res.write("</div>");
                    res.write("</div>");
                }
            }
            res.write('</div>');
            res.write('</div>');
            res.write(body_e);
            res.end()
                // page = '<a href=' + req.url + '&page=' + 1 + '>Next Page</a>';
                // res.write(page);
        })
}).listen(8000);
