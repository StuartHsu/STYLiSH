const { productsDB, variantsDB } = require('./productList');
const { productCountDB, searchCountDB } = require('./productCount');

async function dataStructure(target) {

  for (var i = 0; i < target.length; i++) {
    var eachProduct = target[i];
    // 整理照片路徑
    var imageList = [];
    var imageSplit = eachProduct.images;
    var seperateImage = imageSplit.split(',');

    for (var j = 0; j < seperateImage.length; j++) {
      imageList.push(seperateImage[j]);
    }

    // 取代原本的 images 內容
    eachProduct.images = imageList;
    // 處理 color, size, variant data
    var allVariantsInfo = await variantsDB(eachProduct.id);
    var colors = [];
    var sizes = [];
    var variants = [];

    allVariantsInfo.forEach(variant => {
      colors.push({
        code: variant.colors.code,
        name: variant.colors.name
      });
      sizes.push(variant.sizes);
      variants.push({
        color_code: variant.variants.color_code,
        size: variant.variants.size,
        stock: variant.variants.stock
      });
    });

    // 濾掉重複
    var noRepeatSize = sizes.filter(function(element, index, arr) {
      return arr.indexOf(element) === index;
    });
    // 排序大小
    var sortSize = noRepeatSize.sort(function(a) {
      if(a === "S") {
        return -1;
      } else if (a === "M") {
        return 0;
      } else {
        return 1;
      }
    });
    // 加到主幹中
    eachProduct.colors = colors;
    eachProduct.sizes = sortSize;
    eachProduct.variants = variants;

  }

  return target;

}





module.exports = {
  dataStructure
}
