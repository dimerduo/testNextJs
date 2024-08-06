export interface MediaImg {
  data: {
    id:         number;
    attributes: {
      name:              string;
      alternativeText:   null;
      caption:           null;
      width:             number;
      height:            number;
      formats:           MediaFormats;
      hash:              string;
      ext:               string;
      mime:              string;
      size:              number;
      url:               string;
      previewUrl:        null;
      provider:          string;
      provider_metadata: null;
      createdAt:         Date;
      updatedAt:         Date;
    };
  } | null;
}

export interface MediaFormats {
  thumbnail:    MediaFormatsObject;
  postCard?:    MediaFormatsObject;
}

export interface MediaFormatsObject {
  name:        string;
  hash:        string;
  ext:         string;
  mime:        string;
  path:        null;
  width:       number;
  height:      number;
  size:        number;
  sizeInBytes: number;
  url:         string;
}