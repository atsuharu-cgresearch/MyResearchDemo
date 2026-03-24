// main.js

document.getElementById('play-button').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('thumbnail').style.display = 'none';
    
    const loadingText = document.getElementById('loading-text');
    const canvas = document.getElementById('unity-canvas');
    loadingText.style.display = 'block';
    canvas.style.display = 'block';

    const config = {
        dataUrl: "UnityBuild/Build/PBH_Unity6.data",
        frameworkUrl: "UnityBuild/Build/PBH_Unity6.framework.js",
        codeUrl: "UnityBuild/Build/PBH_Unity6.wasm",
        streamingAssetsUrl: "UnityBuild/StreamingAssets",
        companyName: "DefaultCompany",
        productName: "MyProject",
        productVersion: "0.1",
    };

    createUnityInstance(canvas, config, (progress) => {
        loadingText.innerText = "Loading... " + Math.round(100 * progress) + "%";
    }).then((unityInstance) => {
        loadingText.style.display = 'none';
        console.log("Unity Loaded Successfully!");
    }).catch((message) => {
        alert("Unityのロード中にエラーが発生しました: " + message);
    });
});