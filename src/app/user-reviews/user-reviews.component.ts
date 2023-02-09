import { Component } from '@angular/core';
import {
  faAngleRight,
  faAngleLeft,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-reviews',
  templateUrl: './user-reviews.component.html',
  styleUrls: ['./user-reviews.component.css'],
})
export class UserReviewsComponent {
  reviewIndex = 0;
  reviews = [
    { rating: 4, comment: 'Great product!' },
    { rating: 2, comment: 'Could be better.' },
    { rating: 5, comment: 'Amazing!' },
    { rating: 3, comment: "It's okay." },
    { rating: 5, comment: 'Awesome!' },
    { rating: 1, comment: 'Not satisfied.' },
  ];
  visibleReviews = this.reviews.slice(this.reviewIndex, this.reviewIndex + 3);

  prevReviews() {
    if (this.reviewIndex !== 0) {
      this.reviewIndex -= 3;
      this.visibleReviews = this.reviews.slice(
        this.reviewIndex,
        this.reviewIndex + 3
      );
    }
  }

  nextReviews() {
    if (this.reviewIndex + 3 < this.reviews.length) {
      this.reviewIndex += 3;
      this.visibleReviews = this.reviews.slice(
        this.reviewIndex,
        this.reviewIndex + 3
      );
    }
  }
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;
  faStar = faStar;
}
