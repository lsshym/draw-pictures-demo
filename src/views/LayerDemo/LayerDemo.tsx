import { Upload } from "antd";
import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PreviewModule from "../../components/PreviewModule/views/PreviewModule";
import { initPreviewLayer, updateLayersData } from "../../redux/counterSlice";
import { RootState } from "../../redux/store";
import { LayerTypeEnum } from "../../components/PreviewModule/previewLayers";

interface LayerDemoProps {}

const LayerDemo: FunctionComponent<LayerDemoProps> = () => {
    const previewLayersData = useSelector((state: RootState) => {
        return state.layersData.layers;
    });
    const demoData = [
        {
            name: "",
            data: {
                figureAvatar: {
                    layerType: LayerTypeEnum.figureAvatar,
                    value: "https://img0.baidu.com/it/u=2588759194,769856364&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=786",
                    style: {
                        top: "124px",
                    },
                },
                bgPitcure: {
                    layerType: LayerTypeEnum.bgPitcure,
                    value: "https://img1.baidu.com/it/u=241649533,64972487&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
                },
            },
        },
        {
            name: "",
            data: {
                topIcon: {
                    layerType: LayerTypeEnum.topIcon,
                    value: "",
                },
            },
        },
    ];
    const reduxcDispatch = useDispatch();
    useEffect(() => {
        reduxcDispatch(
            initPreviewLayer({
                data: demoData,
            })
        );
    }, []);
    // reduxcDispatch(
    //     updateLayersData({
    //         type: "",
    //         value: "",
    //     })
    // );
    return (
        <div>
            <div className="layer">
                <PreviewModule layers={previewLayersData}></PreviewModule>
            </div>
            <div>
                <Upload></Upload>
            </div>
        </div>
    );
};

export default LayerDemo;
