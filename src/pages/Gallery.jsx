import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (title && description && file) {
      const newImage = {
        title,
        description,
        src: URL.createObjectURL(file),
      };
      setImages([...images, newImage]);
      setTitle("");
      setDescription("");
      setFile(null);
    }
  };

  return (
    <div>
      <h1 className="text-3xl mb-4">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Card key={index}>
            <img src={image.src} alt={image.title} className="mx-auto rounded-xl object-cover w-full h-[200px]" />
            <CardHeader>
              <CardTitle>{image.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{image.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl mb-4">Upload New Image</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="file">Image File</Label>
            <Input id="file" type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <Button onClick={handleUpload}>Upload</Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;