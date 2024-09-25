var tea_content_type;
function encrypt (v, k) {
    if (typeof(v) != "array") {
        v = v.split("");
    }

    if (v.length != 2) {
        if (v.length < 2) {
            console.log("Less than 2 v inputs");
        } else {
            console.log("More than 2 v inputs");
        }
    }

    if (typeof(v[0]) != "number" || typeof(v[1]) != "number") {
        if (typeof(eval(v[0])) == "number" && typeof(eval(v[1])) == "number") {
            tea_content_type = "number";
            v[0] = Number(v[0]);
            v[1] = Number(v[1]);
        } else {
            if (typeof(eval(v[0])) == "string" && typeof(eval(v[1])) == "string") {
                tea_content_type = "string";
                v[0].toLowerCase();
                v[1].toLowerCase();
                switch (v[0]) {
                    case "a": v[0] = 1; break;
                    case "b": v[0] = 2; break;
                    case "c": v[0] = 3; break;
                    case "d": v[0] = 4; break;
                    case "e": v[0] = 5; break;
                    case "f": v[0] = 6; break;
                    case "g": v[0] = 7; break;
                    case "h": v[0] = 8; break;
                    case "i": v[0] = 9; break;
                    case "j": v[0] = 10; break;
                    case "k": v[0] = 11; break;
                    case "l": v[0] = 12; break;
                    case "m": v[0] = 13; break;
                    case "n": v[0] = 14; break;
                    case "o": v[0] = 15; break;
                    case "p": v[0] = 16; break;
                    case "q": v[0] = 17; break;
                    case "r": v[0] = 18; break;
                    case "s": v[0] = 19; break;
                    case "t": v[0] = 20; break;
                    case "u": v[0] = 21; break;
                    case "v": v[0] = 22; break;
                    case "w": v[0] = 23; break;
                    case "x": v[0] = 24; break;
                    case "y": v[0] = 25; break;
                    case "z": v[0] = 26; break;
                }
                switch (v[1]) {
                    case "a": v[1] = 1; break;
                    case "b": v[1] = 2; break;
                    case "c": v[1] = 3; break;
                    case "d": v[1] = 4; break;
                    case "e": v[1] = 5; break;
                    case "f": v[1] = 6; break;
                    case "g": v[1] = 7; break;
                    case "h": v[1] = 8; break;
                    case "i": v[1] = 9; break;
                    case "j": v[1] = 10; break;
                    case "k": v[1] = 11; break;
                    case "l": v[1] = 12; break;
                    case "m": v[1] = 13; break;
                    case "n": v[1] = 14; break;
                    case "o": v[1] = 15; break;
                    case "p": v[1] = 16; break;
                    case "q": v[1] = 17; break;
                    case "r": v[1] = 18; break;
                    case "s": v[1] = 19; break;
                    case "t": v[1] = 20; break;
                    case "u": v[1] = 21; break;
                    case "v": v[1] = 22; break;
                    case "w": v[1] = 23; break;
                    case "x": v[1] = 24; break;
                    case "y": v[1] = 25; break;
                    case "z": v[1] = 26; break;
                }
            }

        }
        
    }


    v0 = v[0];
    v1 = v[1];
    sum = 0;
    delta = 2654435769;
    
    k0 = k[0];
    k1 = k[1];
    k2 = k[2];
    k3 = k[3];

    for (i = 0; i < 32; i++) {
        sum += delta;
        v0 += ((v1 << 4) + k0) ^ (v1 + sum) ^ ((v1 >> 5) + k1);
        v1 += ((v0 << 4) + k2) ^ (v0 + sum) ^ ((v0 >> 5) + k3);
    }

    v[0] = v0;
    v[1] = v1;
    console.log(v0);
    console.log(v1);
}

function decrypt (v, k) {
    v0 = v[0];
    v1 = v[1];
    sum = 3337565984;
    delta = 2654435769

    k0 = k[0]
    k1 = k[1];
    k2 = k[2];
    k3 = k[3];

    for (i = 0; i < 32; i++) {
        v1 -= ((v0 << 4) + k2) ^ (v0 + sum) ^ ((v0 >> 5) + k3);
        v0 -= ((v1 << 4) + k0) ^ (v1 + sum) ^ ((v1 >> 5) + k1);
        sum -= delta;
    }

    v[0] = v0;
    v[1] = v1;
    console.log(v0);
    console.log(v1);
}