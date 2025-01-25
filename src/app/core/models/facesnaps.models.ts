export class FaceSnap {
  constructor(
    public _id: number,
    public title: string,
    public description: string,
    public imageUrl: string,
    public snaps: number,
    public createdDate: Date,
    public userId: number,
    public location: string
  ) {}
}
