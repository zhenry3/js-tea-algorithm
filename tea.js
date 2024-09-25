function encrypt (v, k) {
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