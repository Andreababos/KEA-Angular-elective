export class Rating {
    rating: Number; // 1-5 stars
    description: String;
}

export class BabyRating extends Rating {
    sitterId: string;
}

export class SitterRating extends Rating {
    parentId: string;
}