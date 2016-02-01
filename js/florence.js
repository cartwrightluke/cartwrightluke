

var plaintextFromCode = {
    "series" : {
        1: "The city of Florence in 1427",
        2: "Additions of 1428",
        7: "Additions of 1429",
    },
    "location": {
        1 : {
            "quarter" : "Quarter of San Spirito",
            "gonfalone" : {
                1 : "Scala",
                2 : "Nicchio",
                3 : "Ferza",
                4 : "Drago"
            }
        },
        2 : {
            "quarter": "Quarter of S. Croce",
            "gonfalone" : {
                1 : "Carro",
                2 : "Bue",
                3 : "Leon Nero",
                4 : "Ruote"
            }
        },
        3 : {
            "quarter": "Quarter of S. Maria Novella",
            "gonfalone" : {
                1 : "Vipera",
                2 : "Unicorno",
                3 : "Leon Rosso",
                4 : "Leon Bianco"
            }
        },
        4 : {
            "quarter": "Quarter of S. San Giovanni",
            "gonfalone" : {
                1 : "Leon D'Oro",
                2 : "Drago",
                3 : "Chiavi",
                4 : "Vaio"
            }
        }
    },

    "trade" : {  
        0: "No Trade",
        1: "Peasant landlord",
        2: "Peasant leasing land",
        3: "Share-cropper",
        4: "Agricultural laborer",
        5: "Shepherd",
        6: "Fisherman",
        7: "Grocer",
        8: "Knights, bishops, high ecclesiastics",
        9: "Cotton Wholesaler",
        10: "Sailor, Shipbuilder / servicer",
        11: "Servant of private family",
        12: "Servant of ecclesiastical institution",
        13: "Employee of commune",
        14: "Soldier",
        15: "Employee of guild",
        16: "Cook",
        17: "Grave-digger).",
        18: "Scribes, non-accredited notaries",
        19: "Miscellaneous",
        20: "Transporter of persons or goods",
        21: "Judges and Notaries",
        22: "Great merchant",
        23: "Money changer",
        24: "Wool manufacturer or merchant",
        25: "Silk merchant, silk weaver",
        26: "Seller of spices",
        27: "Furrier",
        28: "Butcher",
        29: "Shoemaker",
        30: "Smith",
        31: "Linen cloth retailer",
        32: "Medical doctor",
        33: "Wine dealers",
        34: "Innkeepers",
        35: "Oil & merchants, Candlemakers",
        36: "Tanner",
        37: "Belt-maker",
        38: "Maker of armor plating",
        39: "Key and lock makers",
        40: "Carpenters",
        41: "Bakers",
        42: "Miller",
        43: "Cloth bleacher and dyers",
        44: "Barber",
        45: "Wool carder",
        46: "Weaver of wool",
        47: "Prepared food retailer",
        48: "Coopers",
        49: "Jewelers, Goldsmiths, Engravers, Sculptors",
        50: "Urban labourer",
        51: "Earthenware maker or dealer",
        52: "Peddler",
        53: "Raw wool cleaner",
        54: "Stone worker",
        55: "Leather horse good makers",
        56: "Paper makers and dealers",
        57: "Blacksmith",
        58: "Doublet maker",
        59: "Kiln makers and operators, glassblowers",
        60: "Wool cloth finisher",
        61: "Wool combers, carders and sorters",
        62: "Wool shearer",
        63: "Makers of purses and containers",
        64: "Weavers of silk and linen",
        65: "Slipper makers",
        66: "Weigher, maker or seller of scales",
        67: "Tailor",
        68: "Makers of cloaks and dressing gowns",
        69: "Town crier, auctioneer",
        70: "Priest",
        71: "Religious",
        72: "Begger or Ward of the Church",
        73: "Leather seller, saddler",
        74: "Hat maker",
        75: "Non-ferrous metal dealers or workers",
        76: "Iron worker or dealer",
        77: "Teacher or student of letters or abacus",
        78: "Leather tanner or dresser",
        79: "Broker, Middleman",
        80: "Thread maker or Spinner",
        81: "Type of leather worker",
        82: "Religious lady sequestered at home",
        83: "Musician or Jester",
        84: "Washer of cloths",
        85: "Cutter, cutler.",
        86: "Mule driver, horse or ass dealer",
        87: "Sewer of wool cloth, Embroider, Threader",
        88: "Employee of mint",
        89: "Rural noble",
        90: "Jew",
        91: "Wool stretcher",
        92: "Mattress maker, bed maker",
        93: "Wool manufacturer",
        94: "Workers in weapons and armour",
        95: "Artist, Painter or Miniature-maker",
        96: "Grain dealers",
        97: "Rope maker or Bag makers",
        98: "Raw wool beaters and cleaners",
        99: "Lawyer"
    },

    "type of declaration" : {
        0 : "No comment",
        1 : "Inheritance without heirs", 
        2 : "Cancelled duplicate entry", 
        3 : "Incomplete entry", 
        4 : "Property of a rural parish or association",
        5 : "Tax exempt"
    },

    "type of house" : {
        1 : "Declarer owns home where he lives", 
        2 : "Rents the home where he lives",
        3 : "Lives with a family in a house for which he does not pay the rent (in the case of parents, servants ...)"
    },

    "animals" : { 
        1 : "Owner of cattle", 
        2 : "Renter of cattle", 
        3 : "Owns and rents cattle", 
        4 : "Owns only small beasts", 
        5 : "Owns beasts of burden (and possibly small beasts)" 
    },

    "migration": {
        1: "Comes from a locality of the district of Florence, or the parish where he is registered",
        2: "Living and residing in a locality of the district of Florence, but elsewhere than where he is obliged to the tax",
        3: "Comes from a non-Florentine Italian locality",
        4: "Comes from Germany",
        5: "Comes from countries other than Germany and Italy",
        6: "Residing in Italy outside of the district of Florence",
        7: "Residing in Germany",
        8: "Residing in a country other than Germany or Italy"
    },

    "sex": {
        0 : "Unknown",
        1 : "Male",
        2 : "Female"
    },

    "age": {
        79 : "Indeterminate age",
        81 : "81 or 79",
        89 : "Infants of less than a year",
        91 : "89 or 91",
        99 : "99+"
    },

    "marital status" : {
        0 : "Indeterminate",
        1 : "Married",
        2 : "Single",
        3 : "Engaged", 
        4 : "Widowed",
        5 : "Married or widowed",
        6 : "Not given",
        7 : "Separated",
        8: "Newly married or added in 1428-29"
    },

    "relation to head" : {
        0 : "Probably heir",
        1 : "Head of family"
    },

    "comment" : {
        0 : "No comment",
        1 : "Anyone not recognized as a legitimate 'bocca' by the officials of the Catasto",
        2 : "Newborn baby added to the original declaration in 1428-29",
        4 : "Anyone registered as outside of the district of Florence (for reasons of commerce, etc.)",
        5 : "Occupation different from that of the head of family",
        6 : "Physically or intellectually incapable",
        7 : "Illegitimate child",
        8 : "Crossed out on the declaration because of marriage (women and men)",
        9 : "Crossed out because of death"
    }

}


function loadData() {
    zip.workerScriptsPath = "../js/lib/";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../florence-data/data.zip");
    xhr.responseType = "blob";//force the HTTP response, response-type header to be blob
    xhr.onload = function () {
        zip.createReader(new zip.BlobReader(xhr.response), function (reader) {
            // get all entries from the zip
            reader.getEntries(function (entries) {
                if (entries.length) {
                    console.log("Read zip")
                    // get first entry content as text
                    entries[0].getData(new zip.TextWriter(), function (text) {
                        // text contains the entry data as a String
                        loadTSV(text);

                        // close the zip reader
                        reader.close(function () {
                            // onclose callback
                        });

                    }, function (current, total) {
                        // onprogress callback
                    });
                }
            });
        }, function (error) {
            console.error("Data zip error!")
            console.error(error)
        });
    }
    xhr.send();
}

function textRange(code, rangeSize) {
    var floorRange = Math.floor(code / rangeSize) * rangeSize;
    var ceilRange = floorRange + rangeSize;
    return floorRange + " - " + ceilRange;
}


function textFromCode(keyType, code) {
    var plaintext = null;
    if (keyType == "location") {
        var quarterCode = Math.floor(code/ 10) + 1;
        var gonfaloneCode = code % 10 + 1;
        if (quarterCode >= 1 && quarterCode <= 4 && gonfaloneCode >= 1 && gonfaloneCode <= 4) {
            return {
                "code": code,
                "quarter": { "code": quarterCode, "plaintext": plaintextFromCode[keyType][quarterCode]["quarter"] },
                "gonfalone": { "code" : quarterCode, "plaintext" : plaintextFromCode[keyType][quarterCode]["gonfalone"][gonfaloneCode] }
            };
        } else {
            return code;
        }
    } else if(plaintextFromCode.hasOwnProperty(keyType)) {
        if (keyType == "age") {
            return { "code": code, "plaintext": code };
        } else if(plaintextFromCode[keyType].hasOwnProperty(code)) {
            return { "code": code, "plaintext": plaintextFromCode[keyType][code] };
        } else {
            return { "code": code, "plaintext": "Unknown" };
        }
    } else if (keyType == "bocche") {
        return { "code": code, "plaintext": code };    
    } else if (keyType == "name" || keyType == "patronymic" || keyType == "family name") {
        return { "plaintext": code };
    } else if (keyType == "page" || keyType == "volume") {
        return { "code": code, "plaintext": textRange(code, 100) };
    } else if (keyType == "private investment" || keyType == "public investment" || keyType == "real estate" || keyType == "total" || keyType == "deductions" || keyType == "taxable" || keyType == "stg-ID") {
        return { "code": code, "plaintext": textRange(code, 1000) };
    } else {
        return { "code": code };
    }
}

function createRecord(recordKeys, recordData) 
{
    var record = {};
    for (var i = 0; i < recordKeys.length; i++) {
        record[recordKeys[i]] = textFromCode(recordKeys[i], recordData[i]);
    }
    return record;
}

var locationData = null;

function loadTSV(data) {
    var records = data.split("\n");
    var recordKeys = records[0].split("\t");

    for (var i = 0; i < recordKeys.length; i++) {
        var key = recordKeys[i];
        if (key != "location") {
            var newButton = document.createElement("button");
            newButton.type = "optionButton";
            newButton.id = key;
            newButton.innerText = key;
            document.getElementById("options").appendChild(newButton);
            newButton.addEventListener("click", getKeyHandler(key));
        }
    }

    locationData = [];
    for (var i = 0; i < 4; i++) {
        locationData.push([]);
        for (var j = 0; j < 4; j++) {
            locationData[i].push([]);
            inhabitants[quarter * 4 + gonfalone] = 0;
        }
    }
    for (var i = 1; i < records.length; i++) {
        var recordData = records[i].split("\t");
        var location = recordData[1];
        var quarter = Math.floor(location / 10);
        var gonfalone = location % 10;
        if (quarter >= 1 && quarter <= 4 && gonfalone >= 1 && gonfalone <= 4) {
            inhabitants[(quarter - 1) * 4 + gonfalone - 1]++;
            locationData[quarter - 1][gonfalone - 1].push(createRecord(recordKeys, recordData));
        }
    }
}

function setColormap(id) {
    if (id == "red-linear") {
        colormap = function (v) {
            var hexInt = Math.min(255, Math.floor(v * 256));
            var hexStr = hexInt.toString(16);
            while (hexStr.length < 2) {
                hexStr = "0" + hexStr;
            }
            hexStr = "#" + hexStr + "0000";
            return hexStr;
        }
    }
    if (id == "red-exp") {
        colormap = function (v) {
            v = Math.sqrt(v);
            var hexInt = Math.min(255, Math.floor(v * 256));
            var hexStr = hexInt.toString(16);
            while (hexStr.length < 2) {
                hexStr = "0" + hexStr;
            }
            hexStr = "#" + hexStr + "0000";
            return hexStr;
        }
    }
}


var inhabitants = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var curRegionValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var normMap = "norm";

function normalizeMap() {
    var mapMax = Math.max.apply(null, curRegionValues);
    var mapMin = Math.min.apply(null, curRegionValues);
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (normMap == "norm") {
                setRegionColor(i + 1, j + 1, (curRegionValues[i * 4 + j] - mapMin) / (mapMax - mapMin));
            } else if (normMap == "percent") {
                setRegionColor(i + 1, j + 1, curRegionValues[i * 4 + j] / inhabitants[i * 4 + j]);
            } else {
                setRegionColor(i + 1, j + 1, curRegionValues[i * 4 + j]);
            }
        }
    }
}

function setRegionColor(quarter, gonfalone, value) {
    if (loadedMap != null) {
        var color = colormap(value);
        var regionID = "region_" + quarter + "_" + gonfalone;
        loadedMap.select("path[id='" + regionID + "']").attr({ fill: color });
    }
}

function setRegionValue(quarter, gonfalone, value) {
    if (loadedMap != null) {
        curRegionValues[(quarter - 1)  * 4 + gonfalone - 1] = value;
        normalizeMap();
    }
}

var regionValues = null;

function switchRegion(quarter, gonfalone, property) {
    var val = regionValues[(quarter - 1) * 4 + gonfalone - 1];
    if (typeof val === 'object') {
        if (val.hasOwnProperty(property)) {
            setRegionValue(quarter, gonfalone, val[property]);
        } else {
            setRegionValue(quarter, gonfalone, 0);
        }
    }
}

function switchRegions(property) {
    for (var i = 1; i <= 4; i++) {
        for (var j = 1; j <= 4; j++) {
            switchRegion(i, j, property);
        }
    }
}

function getSwitchHandler(property) {
    return function () { switchRegions(property); };
}

var currentProperty = null;

function setMap(arr) {
    document.getElementById("subOptions").innerHTML = "";
    currentProperty = null;
    regionValues = arr;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var val = regionValues[i * 4 + j];
            if (typeof val === 'object') {
                for (var property in val) {
                    if (val.hasOwnProperty(property)) {
                        if (currentProperty == null || currentProperty == property) {
                            currentProperty = property;
                            switchRegion(i + 1, j + 1, property);
                        }
                        if (document.getElementById(property) == null) {
                            var newButton = document.createElement("button");
                            newButton.type = "subOptionButton";
                            newButton.id = property;
                            newButton.innerText = property;
                            document.getElementById("subOptions").appendChild(newButton);
                            newButton.addEventListener("click", getSwitchHandler(property));
                        }
                    }
                }
            }
            else
            {            
                setRegionValue(i + 1, j + 1, val);
            }
        }
    }
}

function runCode() {
    var userCode = document.getElementById('testCode').value;
    var code = "processData = function(data) { " + userCode + " }";
    eval(code);
    var result = [];
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            result.push(processData(locationData[i][j]));
        }
    }
    setMap(result);
}

function changeCode(code) {
    document.getElementById('testCode').value = code;
}

function getKeyHandler(key) {
    return function () {
        changeCode("var properties = {}; \nfor(var i = 0; i < data.length; i++) {\n\tvar curProp = data[i]['" + key + "'].plaintext; \n\tif(!properties.hasOwnProperty(curProp)) {\n\t\tproperties[curProp] = 1;\n\t} else {\n\t\tproperties[curProp]++;\n\t}\n}\nreturn(properties);");
        runCode();
    }
}


loadData();

var loadedMap = null;
var colormap = null;

setColormap("red-exp");

processData = function () { console.error("CODE NOT LOADED"); }

window.onload = function () {
    document.getElementById('norm').addEventListener("click", function () { normMap = "norm"; runCode(); });
    document.getElementById('noNorm').addEventListener("click", function () { normMap = "none"; runCode(); });
    document.getElementById('percent').addEventListener("click", function () { normMap = "percent"; runCode(); });

    document.getElementById('runCode').addEventListener("click", runCode);

    var map = Snap("#map");
    Snap.load("../images/florence-map.svg", function (f) {
        g = f.select("g");
        map.append(g);
        loadedMap = g;
        setMap([0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]);
    });
}