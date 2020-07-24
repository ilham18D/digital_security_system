import React from "react";
import { FirebaseApp } from "../api";
import CircularProgress from "@material-ui/core/CircularProgress";
interface ImageComponentProps {
  id?: string;
  imageUrl?: string;
}
const ImageComponent: React.FunctionComponent<ImageComponentProps> = ({
  id,
  imageUrl,
}) => {
  const [loading, setLoading] = React.useState(true);
  const [src, setSrc] = React.useState("");
  React.useEffect(() => {
    const loadImageUrl = async () => {
      if (id && imageUrl) {
        const storage = FirebaseApp.storage();
        const url = await storage.ref().child(imageUrl).getDownloadURL();
        setSrc(url);
        setLoading(false);
        return;
      }
      setSrc("/blank_image.png");
      setLoading(false);
      return;
    };
    loadImageUrl();
  }, [id, imageUrl]);

  return (
    <div>
      {loading === true ? (
        <CircularProgress color="secondary" />
      ) : (
        <div>
          <label htmlFor="file-upload">
            <img src={src} alt={id} width={80} height={85} />
          </label>
        </div>
      )}
    </div>
  );
};
export default ImageComponent;
