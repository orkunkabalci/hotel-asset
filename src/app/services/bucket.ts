import * as Bucket from '@spica-devkit/bucket';
/**
 * Call this method before interacting with buckets.
 * @param initOptions Initialize options to initialize the '@spica-devkit/bucket'.
 */
export function initialize(
  ...initOptions: Parameters<typeof Bucket.initialize>
) {
  initOptions[0].publicUrl = 'https://asset-playground-05dae.hq.spicaengine.com/api';
  Bucket.initialize(...initOptions);
}

type Rest<T extends any[]> = ((...p: T) => void) extends ((p1: infer P1, ...rest: infer R) => void) ? R : never;
type getArgs = Rest<Parameters<typeof Bucket.data.get>>;
type getAllArgs = Rest<Parameters<typeof Bucket.data.getAll>>;
type realtimeGetArgs = Rest<Parameters<typeof Bucket.data.realtime.get>>;
type realtimeGetAllArgs = Rest<Parameters<typeof Bucket.data.realtime.getAll>>;
type id = { _id: string };

export interface User{
  _id?: string;
  name?: string;
  surname?: string;
  gender?: ('male'|'female'|'other');
  vip?: boolean;
  birthdate?: Date | string;
  created_at?: Date | string;
  phone_number?: string;
  mail?: string;
  image?: string;
}
export namespace user {
  const BUCKET_ID = '618b72b95ee9b9002f154643';
    export function get (...args: getArgs) {
      return Bucket.data.get<User & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<User & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<User, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: User & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<User> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<User & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<User & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Teacher{
  _id?: string;
  name?: string;
  surname?: string;
  mail?: string;
  phone_number?: string;
  gender?: ('male'|'female'|'other');
  picture?: string;
  birthday?: Date | string;
  created_at?: Date | string;
  speciality?: (Teacher_Speciality & id | string)[];
  biography?: string;
}
export namespace teacher {
  const BUCKET_ID = '618142b7b0ba86002e5d6552';
    export function get (...args: getArgs) {
      return Bucket.data.get<Teacher & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Teacher & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Teacher, "_id">) {
      ['speciality'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Teacher & id) {
      ['speciality'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Teacher> & id
    ) {
      ['speciality'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Teacher & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Teacher & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Video_Packet{
  _id?: string;
  name?: string;
  videos?: (Video & id | string)[];
}
export namespace video_packet {
  const BUCKET_ID = '618142b7b0ba86002e5d6558';
    export function get (...args: getArgs) {
      return Bucket.data.get<Video_Packet & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Video_Packet & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Video_Packet, "_id">) {
      ['videos'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Video_Packet & id) {
      ['videos'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Video_Packet> & id
    ) {
      ['videos'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Video_Packet & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Video_Packet & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Food_Program{
  _id?: string;
  name?: string;
  user?: (User & id | string);
  teacher?: (Teacher & id | string);
  created_at?: Date | string;
  days?: {
  day_of_week?: (1|2|3|4|5|6|7);
  meal?: {
  description?: string;
  number_of_meal?: number;}[];}[];
}
export namespace food_program {
  const BUCKET_ID = '618142b7b0ba86002e5d655c';
    export function get (...args: getArgs) {
      return Bucket.data.get<Food_Program & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Food_Program & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Food_Program, "_id">) {
      ['user','teacher'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Food_Program & id) {
      ['user','teacher'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Food_Program> & id
    ) {
      ['user','teacher'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Food_Program & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Food_Program & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Video{
  _id?: string;
  name?: string;
  description?: string;
  image?: string;
  vip?: boolean;
  duration?: number;
  video?: string;
  upload_date?: Date | string;
  category?: (Category & id | string);
}
export namespace video {
  const BUCKET_ID = '618142b6b0ba86002e5d654c';
    export function get (...args: getArgs) {
      return Bucket.data.get<Video & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Video & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Video, "_id">) {
      ['category'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Video & id) {
      ['category'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Video> & id
    ) {
      ['category'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Video & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Video & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Category{
  _id?: string;
  name?: string;
  description?: string;
  image?: string;
  branches?: (Teacher_Speciality & id | string)[];
}
export namespace category {
  const BUCKET_ID = '618142b7b0ba86002e5d6555';
    export function get (...args: getArgs) {
      return Bucket.data.get<Category & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Category & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Category, "_id">) {
      ['branches'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Category & id) {
      ['branches'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Category> & id
    ) {
      ['branches'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Category & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Category & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Weekly_Program{
  _id?: string;
  name?: string;
  days?: {
  day_of_week?: string;
  hours?: {
  from?: string;
  until?: string;
  description?: string;}[];}[];
  created_at?: Date | string;
}
export namespace weekly_program {
  const BUCKET_ID = '618142b7b0ba86002e5d6560';
    export function get (...args: getArgs) {
      return Bucket.data.get<Weekly_Program & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Weekly_Program & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Weekly_Program, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Weekly_Program & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Weekly_Program> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Weekly_Program & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Weekly_Program & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Performance{
  _id?: string;
  title?: string;
  teacher?: (Teacher & id | string);
  user?: (User & id | string);
  created_at?: Date | string;
  metrics?: {
  left_arm?: string;
  right_arm?: string;
  right_leg?: string;
  left_leg?: string;
  shoulders?: string;
  weight?: string;};
}
export namespace performance {
  const BUCKET_ID = '618142b7b0ba86002e5d6563';
    export function get (...args: getArgs) {
      return Bucket.data.get<Performance & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Performance & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Performance, "_id">) {
      ['teacher','user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Performance & id) {
      ['teacher','user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Performance> & id
    ) {
      ['teacher','user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Performance & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Performance & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Training{
  _id?: string;
  name?: string;
  packet?: (Video_Packet & id | string);
  teacher?: (Teacher & id | string);
  user?: (User & id | string);
  description?: string;
}
export namespace training {
  const BUCKET_ID = '618142b7b0ba86002e5d656a';
    export function get (...args: getArgs) {
      return Bucket.data.get<Training & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Training & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Training, "_id">) {
      ['packet','teacher','user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Training & id) {
      ['packet','teacher','user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Training> & id
    ) {
      ['packet','teacher','user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Training & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Training & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Teacher_Speciality{
  _id?: string;
  name?: string;
  image?: string;
  description?: string;
}
export namespace teacher_speciality {
  const BUCKET_ID = '618142b6b0ba86002e5d6549';
    export function get (...args: getArgs) {
      return Bucket.data.get<Teacher_Speciality & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Teacher_Speciality & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Teacher_Speciality, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Teacher_Speciality & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Teacher_Speciality> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Teacher_Speciality & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Teacher_Speciality & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Watched_Video{
  _id?: string;
  name?: string;
  video?: (Video & id | string);
  watched_date?: Date | string;
  user?: (User & id | string);
}
export namespace watched_video {
  const BUCKET_ID = '618142b8b0ba86002e5d656c';
    export function get (...args: getArgs) {
      return Bucket.data.get<Watched_Video & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Watched_Video & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Watched_Video, "_id">) {
      ['video','user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Watched_Video & id) {
      ['video','user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Watched_Video> & id
    ) {
      ['video','user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Watched_Video & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Watched_Video & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Hotel_room{
  _id?: string;
  name?: string;
  description?: string;
  head_image?: string;
  images?: string[];
  category?: (Hotel_category & id | string);
  properties?: (Hotel_properties & id | string)[];
}
export namespace hotel_room {
  const BUCKET_ID = '619b70235ee9b9002f157fae';
    export function get (...args: getArgs) {
      return Bucket.data.get<Hotel_room & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Hotel_room & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Hotel_room, "_id">) {
      ['category','properties'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Hotel_room & id) {
      ['category','properties'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Hotel_room> & id
    ) {
      ['category','properties'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Hotel_room & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Hotel_room & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Hotel_rezervasyon{
  _id?: string;
  name?: string;
  mail?: string;
  phone_number?: string;
  check_in?: Date | string;
  check_out?: Date | string;
  room?: (Hotel_room & id | string);
  adult?: number;
  children?: number;
}
export namespace hotel_rezervasyon {
  const BUCKET_ID = '619cad785ee9b9002f158823';
    export function get (...args: getArgs) {
      return Bucket.data.get<Hotel_rezervasyon & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Hotel_rezervasyon & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Hotel_rezervasyon, "_id">) {
      ['room'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Hotel_rezervasyon & id) {
      ['room'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Hotel_rezervasyon> & id
    ) {
      ['room'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Hotel_rezervasyon & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Hotel_rezervasyon & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Hotel_category{
  _id?: string;
  name?: string;
}
export namespace hotel_category {
  const BUCKET_ID = '619caebb5ee9b9002f158858';
    export function get (...args: getArgs) {
      return Bucket.data.get<Hotel_category & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Hotel_category & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Hotel_category, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Hotel_category & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Hotel_category> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Hotel_category & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Hotel_category & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Hotel_web_editor{
  _id?: string;
  contact?: {
  adress_map?: { type: "Point", coordinates: [number,number]};
  adress?: string;
  phone_number?: string;
  mail?: string;
  facebook_link?: string;
  instagram_link?: string;};
  homepage?: {
  logo?: string;
  header?: string;
  slides?: string[];};
  site_name?: string;
  about?: string;
}
export namespace hotel_web_editor {
  const BUCKET_ID = '619ca9f25ee9b9002f15879c';
    export function get (...args: getArgs) {
      return Bucket.data.get<Hotel_web_editor & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Hotel_web_editor & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Hotel_web_editor, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Hotel_web_editor & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Hotel_web_editor> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Hotel_web_editor & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Hotel_web_editor & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Hotel_properties{
  _id?: string;
  name?: string;
}
export namespace hotel_properties {
  const BUCKET_ID = '61a4aa075ee9b9002f15ae09';
    export function get (...args: getArgs) {
      return Bucket.data.get<Hotel_properties & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Hotel_properties & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Hotel_properties, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Hotel_properties & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Hotel_properties> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Hotel_properties & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Hotel_properties & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Hotel_activities{
  _id?: string;
  name?: string;
  description?: string;
  images?: string[];
}
export namespace hotel_activities {
  const BUCKET_ID = '61a791d75ee9b9002f15c2fa';
    export function get (...args: getArgs) {
      return Bucket.data.get<Hotel_activities & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Hotel_activities & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Hotel_activities, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Hotel_activities & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Hotel_activities> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Hotel_activities & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Hotel_activities & id>(BUCKET_ID, ...args);
      };
  }
}