const Dec2Bin = n => parseInt(n).toString(2);
const Bin2Dec = n => parseInt(n, 2);

const getBinAndDecrypt = () => Bin2Dec($("#bin").val());
const getDecAndEncrypt = () => Dec2Bin($("#dec").val());

$("#e").on("click", () => {
    const n = getDecAndEncrypt();
    $("#bin").val(n);
});

$("#d").on("click", () => {
    const n = getBinAndDecrypt();
    $("#dec").val(n);
});
