gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDGreenFloorObjects1= [];
gdjs.Untitled_32sceneCode.GDGreenFloorObjects2= [];
gdjs.Untitled_32sceneCode.GDBowlingBall2Objects1= [];
gdjs.Untitled_32sceneCode.GDBowlingBall2Objects2= [];
gdjs.Untitled_32sceneCode.GDTargetRoundButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDTargetRoundButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDGreenBlockObjects1= [];
gdjs.Untitled_32sceneCode.GDGreenBlockObjects2= [];
gdjs.Untitled_32sceneCode.GDIconBackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDIconBackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDGreenBlock2Objects1= [];
gdjs.Untitled_32sceneCode.GDGreenBlock2Objects2= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects2= [];
gdjs.Untitled_32sceneCode.GDBrownBackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDBrownBackgroundObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBowlingBall2Objects1Objects = Hashtable.newFrom({"BowlingBall2": gdjs.Untitled_32sceneCode.GDBowlingBall2Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDTargetRoundButtonObjects1Objects = Hashtable.newFrom({"TargetRoundButton": gdjs.Untitled_32sceneCode.GDTargetRoundButtonObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BowlingBall2"), gdjs.Untitled_32sceneCode.GDBowlingBall2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton"), gdjs.Untitled_32sceneCode.GDTargetRoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.objectsCollide(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBowlingBall2Objects1Objects, "Physics2", gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDTargetRoundButtonObjects1Objects, false);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "WinLayer");
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDGreenFloorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreenFloorObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBowlingBall2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBowlingBall2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDTargetRoundButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTargetRoundButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGreenBlockObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreenBlockObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDIconBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDIconBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGreenBlock2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreenBlock2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBrownBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBrownBackgroundObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
