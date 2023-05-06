import { useQuery } from "@tanstack/react-query";
import * as api from "@/api/queries/categoryQueries";
import FallbackLoader from "../shared/FallbackLoader";
import FallbackRender from "../shared/errors/ErrorRender";
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

const CategoryList: React.FC = () => {
  const { data, isLoading, isError } = useQuery(["authors"], api.getCategories);

  if (isLoading) {
    return <FallbackLoader />;
  }

  if (isError) {
    return <FallbackRender error={"Nastala chyba"} />;
  }

  return (
    <>
      <AutoSizer>
        {({ height, width }) => (
          <FixedSizeList
            height={800}
            width={600}
            itemCount={data.length}
            itemSize={155}
          >
            {({ index, style }) => {
              const photo = data[index];
              return (
                <div style={style}>
                  <h1>{photo.id} - {photo.name}</h1>
                </div>
              );
            }}
          </FixedSizeList>
        )}
      </AutoSizer>
    </>
  );
};

export default CategoryList;
