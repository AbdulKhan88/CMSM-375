export class Review {
  public reviewId: string;
  public screwId: string;
  public content: string;
  public userEmail: string;

  constructor(content: string, userEmail: string, screwId: string, review_id?: string) {
    this.reviewId = review_id;
    this.screwId = screwId;
    this.content = content;
    this.userEmail = userEmail;
  }

}
