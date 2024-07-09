import React from "react";
import Container from "../../Shared/Container/Container";
import ActivityPreview from "../../Previews/ActivityPreview/ActivityPreview";

function MainLandingActivities() {
  return (
    <div className="py-24">
      <Container>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-2 w-full items-center">
            <h3 className="text-gray-400 lg:text-lg">
              შენ ჩვენთან არასდროს მოიწყენ
            </h3>
            <h2 className="text-gray-950 text-4xl font-bold text-center lg:text-5xl">
              აქტივობები
            </h2>
            <div className="max-w-24 w-full lg:mt-2 bg-primary h-1"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <ActivityPreview
            title="საცურაო აუზი"
            description="საცურაო აუზში შენ გაერთობი არა ამ ქვეყნიურადაცურაო აუზში შენ გაერთობი არა ამ ქვეყნიუაცურაო აუზში შენ გაერთობი არა ამ ქვეყნიუაცურაო აუზში შენ გაერთობი არა ამ ქვეყნიუაცურაო აუზში შენ გაერთობი არა ამ ქვეყნიუაცურაო აუზში შენ გაერთობი არა ამ ქვეყნიუაცურაო აუზში შენ გაერთობი არა ამ ქვეყნიუაცურაო აუზში შენ გაერთობი არა ამ ქვეყნიუაცურაო აუზში შენ გაერთობი არა ამ ქვეყნიუაცურაო აუზში შენ გაერთობი არა ამ ქვეყნიუაცურაო აუზში შენ გაერთობი არა ამ ქვეყნიუაცურაო აუზში შენ გაერთობი არა ამ ქვეყნიუაცურაო აუზში შენ გაერთობი არა ამ ქვეყნიუ"
            imageUrl="/images/activities/activities-01.jpg"
            />
            <ActivityPreview
            title="საცურაო აუზი"
            description="საცურაო აუზში შენ გაერთობი არა ამ ქვეყნიურად"
            imageUrl="/images/activities/activities-01.jpg"
            />
            <ActivityPreview
            title="საცურაო აუზი"
            description="საცურაო აუზში შენ გაერთობი არა ამ ქვეყნიურად"
            imageUrl="/images/activities/activities-01.jpg"
            />
            <ActivityPreview
            title="საცურაო აუზი"
            description="საცურაო აუზში შენ გაერთობი არა ამ ქვეყნიურად"
            imageUrl="/images/activities/activities-01.jpg"
            />
            <ActivityPreview
            title="საცურაო აუზი"
            description="საცურაო აუზში შენ გაერთობი არა ამ ქვეყნიურად"
            imageUrl="/images/activities/activities-01.jpg"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MainLandingActivities;
