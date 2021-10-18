var renderClass = "jp.ngt.rtm.render.RailPartsRenderer";
importPackage(Packages.org.lwjgl.opengl);
importPackage(Packages.jp.ngt.rtm.render);

function init(par1, par2) {
  allParts = renderer.registerParts(new Parts("obj1", "obj2", "obj3"));
}

function renderRailStatic(tileEntity, posX, posY, posZ, par8, pass) {
  renderer.renderStaticParts(tileEntity, posX, posY, posZ);
}

function renderRailDynamic(tileEntity, posX, posY, posZ, par8, pass) {}

function shouldRenderObject(tileEntity, objName, len, pos) {
  if (pos % 5 != 0 && objName === "obj2") {
    return false;
  } else if (pos % 25 != 0 && objName === "obj3") {
    return false;
  }
  return true;
}
