function calcCylinderVolume(arr) {
    var radius = arr[0],
        height = arr[1];

    var volume = Math.PI * Math.pow(radius, 2) * height;
    console.log(volume.toFixed(3));
}

calcCylinderVolume([2,4]);
calcCylinderVolume([5,8]);
calcCylinderVolume([12,3]);