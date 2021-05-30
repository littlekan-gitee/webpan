export function saveFile(url,storageId){
    var panLibrary=window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB;
    var pl=panLibrary;
    var storage=pl.open("lkwpsl",4)//lkwpsl=Littlekan WebPan Storage Library

}