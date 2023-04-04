import { AvatarLayer, NoRepeatId, TopIconLayer } from "./previewLayers";
// 需要渲染的部分
type LayersType = AvatarLayer | TopIconLayer;
export class LayerDemoModule extends NoRepeatId {
    constructor(initData = {}) {
        super();
        const avatar = new AvatarLayer(initData.figureAvatar);
        const topIcon = new TopIconLayer(initData.topIcon);
        const bgPitcure = new TopIconLayer(initData.bgPitcure);
        this.data.layers.push(avatar, topIcon, bgPitcure);
    }
    data: { layers: LayersType[] } = { layers: [] };
}
