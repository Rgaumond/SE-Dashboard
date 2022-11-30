const ArrayUtilities = {
    findItemById(arrObj, id) {
        theItem = null;
        $.each(arrObj, (index, value) => {
            if (value.id === parseInt(id)) {
                theItem = value;
                theItem.arrIndex = index;
                return;
            }
        });
        return theItem;
    },
    findItemIndexById(arrObj, id) {
        theItem = null;
        $.each(arrObj, (index, value) => {
            if (value.id === parseInt(id)) {
                theItem = index;
                return;
            }
        });
        return theItem;
    },
    findObjByProp(arrObj, prop, value) {
        /**
         * 
         * @param {array} arrObj The array to parse
         * @param {string} prop The property name
         * @param {string} value The value to ind          
         */
        theObj = null;
        $.each(arrObj, (index, obj) => {
            if (obj[prop] === value) {
                theObj = obj;
                return;
            }
        });
        return theObj;
    },
    findObjIndexByProp(arrObj, prop, value) {
        /**
         * 
         * @param {array} arrObj The array to parse
         * @param {string} prop The property name
         * @param {string} value The value to ind          
         */
        theObj = null;
        $.each(arrObj, (index, obj) => {
            if (obj[prop] === value) {
                theObj = index;
                return;
            }
        });
        return theObj;
    },
    sortByName(objs) {
        //$.each(objs, (index, obj) => {
        //    console.log(obj.name);
        //});
        return objs.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0));
    },
    sortByNameString(objs) {
        //$.each(objs, (index, obj) => {
        //    console.log(obj.name);
        //});
        return objs.sort((a, b) => (a.toLowerCase() > b.toLowerCase()) ? 1 : ((b.toLowerCase() > a.toLowerCase()) ? -1 : 0));
    },
    sortByTextValue(objs,txt) {
        //$.each(objs, (index, obj) => {
        //    console.log(obj.name);
        //});
        return objs.sort((a, b) => (a[txt].toLowerCase() > b[txt].toLowerCase()) ? 1 : ((b[txt].toLowerCase() > a[txt].toLowerCase()) ? -1 : 0));
    },
    sortByNumericValue(objs) {
        //$.each(objs, (index, obj) => {
        //    console.log(obj.name);
        //});
        return objs.sort((a, b) => (a.lastUpdateEpoch > b.lastUpdateEpoch) ? 1 : ((b.lastUpdateEpoch > a.lastUpdateEpoch) ? -1 : 0));
    },
    fetchNextID(arrObj, id) {
        let selectNext = false;
        let nextId;
        $.each(arrObj, (index, value) => {
            if (selectNext) {
                nextId = value.ID;
                selectNext = false;
            }
            if (value.ID === id)
                selectNext = true;
        });
        return nextId;
    },
    fetchLast(objArr) {
        return objArr[objArr.length - 1];
    },
    fetchIndexByName(arrObj, name) {
        let seletedIndex = null;
        $.each(arrObj, (index, value) => {
            if (value.Name.toLowerCase() === name.toLowerCase()) {
                seletedIndex = index;
                return false;
            }
        });
        return seletedIndex;
    },
    customerExists(arrObj, name) {
        let hasDuplicate = false;
        $.each(arrObj, (index, value) => {
            if (value.Name.toLowerCase() === name.toLowerCase()) {
                hasDuplicate = true;
                return false;
            }
        });
        return hasDuplicate;
    },
    groupBy(xs, key) {
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    },
    remove(arr, value) {
        arr.splice(arr.indexOf(value), 1);
    }

};