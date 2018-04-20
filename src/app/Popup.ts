import PopupTemplate = require('esri/PopupTemplate');
export default class Popup {
  private view: __esri.MapView;
  constructor(params: { view: __esri.MapView }) {
    this.view = params.view;
    this.view.on('layerview-create',e=>{
      if(e.layer.type === 'feature'){
        let featureLayer = e.layer as __esri.FeatureLayer;
        featureLayer.popupTemplate = new PopupTemplate({
          content:"fuhidev",title:"DITGIS"
        })
      }
    })
  }
}