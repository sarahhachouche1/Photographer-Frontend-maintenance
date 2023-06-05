import React, { useEffect, useState } from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Responsive, WidthProvider } from "react-grid-layout";
import { SideImage } from "./SideImage";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export const PhotosGrid = ({ photos }) => {
  const [layout, setLayouts] = useState(null);
  const [widgetArray, setWidgetArray] = useState(
    photos
  );

  const handleModify = (newLayout, layout) => {
    // const tempArray = widgetArray;
    setLayouts(newLayout);
    // layouts?.map((position) => {
    //   tempArray[Number(position.i)].x = position.x;
    //   tempArray[Number(position.i)].y = position.y;
    //   tempArray[Number(position.i)].width = position.w;
    //   tempArray[Number(position.i)].height = position.h;
    // });
    setWidgetArray(
      widgetArray.map((photo) => {
        const photoProps = newLayout.find((item) => item.i === photo.i) || photo;
        return { ...photoProps, image: photo.image };
      })
    );
  };

  useEffect(() => {
    setLayouts(photos);
  }, [photos]);

console.log(widgetArray);
console.log(layout);
  const handleAdd = () => {
    // setWidgetArray([
    //   ...widgetArray,
    //   { i: "widget" + (widgetArray.length + 1), x: 0, y: 0, w: 2, h: 2 },
    // ]);
  };

  const handleDelete = (key) => {
    // const tempArray = widgetArray.slice();
    // const index = tempArray.indexOf(tempArray.find((data) => data.i === key));
    // tempArray.splice(index, 1);
    // setWidgetArray(tempArray);
  };

  return (
    <div>
      <button onClick={() => handleAdd()}>Add Widget</button>

      <ResponsiveReactGridLayout
        onLayoutChange={handleModify}
        verticalCompact={true}
        // layout={layouts}
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        preventCollision={true}
        cols={{ lg: 8, md: 8, sm: 3, xs: 2, xxs: 2 }}
        // autoSize={true}
        // margin={{
        //   lg: [20, 20],
        //   md: [20, 20],
        //   sm: [20, 20],
        //   xs: [20, 20],
        //   xxs: [20, 20],
        // }}
        // cols={3} 
        // rowHeight={1000} width={800}
        isResizable={true}
        isDraggable={true}
      >
        {widgetArray?.map((widget, index) => {
          return (
            <div
              className="reactGridItem"
              key={widget.i}
              data-grid={{
                x: widget?.x,
                y: widget?.y,
                w: widget?.w,
                h: widget?.h,
                i: widget.i,
                minW: 2,
                maxW: Infinity,
                minH: 2,
                maxH: Infinity,
                isDraggable: true,
                isResizable: true,
              }}
            >
              {/* <button
                className="deleteButton"
                onClick={() => handleDelete(widget.i)}
              >
                x
              </button> */}
              <div>
                <SideImage key={widget.id} image={widget.image} />
                {/* <img
                  src={`data:image/jpeg;base64,${widget.image}`}
                  alt="section-one-background"
                  className="about-section-one-image"
                /> */}
              </div>
            </div>
          );
        })}
      </ResponsiveReactGridLayout>
    </div>
  );
};
