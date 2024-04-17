interface MajorCredits {
    credits: number
    _majorBrand: any
}

interface MinorCredits  {
    credits: number
    _minorBrand: any
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _majorBrand: null
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _minorBrand: null
    }
}