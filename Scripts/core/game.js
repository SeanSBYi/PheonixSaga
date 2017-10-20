// IIFE - Immediately Invoked Function Expression
(function () {
    var stage;
    var canvas;
    var assetManager;
    var assetManifest = [
        { id: "backButton", src: "../../Assets/images/backButton.png" },
        { id: "restartButton", src: "../../Assets/images/restartButton.png" },
        { id: "nextButton", src: "../../Assets/images/nextButton.png" },
        { id: "startButton", src: "../../Assets/images/startButton.png" },
        { id: "plane", src: "../../Assets/images/plane.png" },
        { id: "bullet", src: "../../Assets/images/bullet.png" },
        { id: "island", src: "../../Assets/images/island.png" },
        { id: "cloud", src: "../../Assets/images/cloud.png" },
        { id: "ocean", src: "../../Assets/images/ocean.gif" },
        { id: "engine", src: "../../Assets/audio/engine.ogg" },
        { id: "thunder", src: "../../Assets/audio/thunder.ogg" },
        { id: "yay", src: "../../Assets/audio/yay.ogg" },
    ];
    var currentScene;
    var currentState;
    function Init() {
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.on("complete", Start);
        assetManager.loadManifest(assetManifest);
    }
    function Start() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        currentState = config.START;
        Main();
    }
    function Update() {
        var newState = currentScene.Update();
        if (newState != currentState) {
            currentState = newState;
            Main();
        }
        stage.update();
    }
    function Main() {
        stage.removeAllChildren();
        switch (currentState) {
            case config.START:
                currentScene = new scenes.Start(assetManager, currentState);
                break;
            case config.PLAY:
                currentScene = new scenes.Play(assetManager, currentState);
                break;
            case config.END:
                currentScene = new scenes.End(assetManager, currentState);
                break;
        }
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map