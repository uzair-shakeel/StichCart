import config from "../config/appconfig";
import dot from "dot-object";
import moment from "moment/moment";

const utils = {
  getImageName: function getImageName(imgName) {
    const imageName =
      imgName && imgName.substring(imgName.lastIndexOf("/") + 1);
    return imageName;
  },
  dotCopy: function dotCopy(source, target, srcPath, tgtPath) {
    var val = dot.pick(srcPath, source);
    if (val != null) {
      dot.copy(srcPath, tgtPath, source, target);
    }
    return target;
  },
  prepareProductImgUrl: function prepareProductImgUrl(url) {
    const imageName = url && url.substring(url.lastIndexOf("/") + 1);
    return imageName;
  },
  calculateProductCost: function calculateProductCost(orderItem, productCost) {
    let totalCost = productCost;
    if (orderItem && orderItem.addlProductOptions) {
      orderItem.addlProductOptions.forEach(function (item) {
        totalCost = totalCost + item.price * orderItem.quantity;
      });
    }
    return totalCost;
  },
  getCurrencyValue: function getCurrencyValue(obj, dotPath) {
    let val = 0;
    try {
      val = dot.pick(dotPath, obj);
    } catch (err) {}
    if (val) {
      val = "₹" + val;
    } else {
      val = "₹0";
    }
    return val;
  },
  getValue: function getValue(obj, dotPath) {
    let val = 0;
    try {
      val = dot.pick(dotPath, obj);
    } catch (err) {}
    if (val) {
      val = val;
    }
    return val;
  },
  isNotEmpty: function isNotEmpty(lst) {
    return lst && lst.length > 0;
  },
  formatDateForDisplay: function formatDateForDisplay(inDate) {
    if (inDate === null || inDate === undefined) return "";
    var str = inDate.substring(0, inDate.indexOf("."));
    var fDate = new Date(str);
    const formattedDate = `${fDate.getDate()}-${
      fDate.getMonth() + 1
    }-${fDate.getFullYear()}`;
    return formattedDate;
  },
  addDate: function addDate(startDate, noOfDaysToAdd) {
    //let startDate = "30-DEC-2022";
    //startDate = new Date(startDate.replace(/-/g, "/"));
    if (noOfDaysToAdd && noOfDaysToAdd > 0) {
      var endDate = "",
        count = 0;
      while (count < noOfDaysToAdd) {
        endDate = new Date(startDate.setDate(startDate.getDate() + 1));
        if (endDate.getDay() != 0 && endDate.getDay() != 7) {
          count++;
        }
      }
      return moment(endDate).format("DD/MMM/YYYY");
    }
    return "";
  },
  isObjEmpty: function isObjEmpty(obj) {
    return Object.keys(obj).length === 0;
  },
  prepareImgUrl: function prepareImgUrl(folder, url) {
    const imageName = url && url.substring(url.lastIndexOf("/") + 1);
    return `${config.image.context}${folder}/${imageName}`;
  },
};

export default utils;
