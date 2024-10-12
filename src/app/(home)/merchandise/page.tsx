import MerchandiseCard from "@/components/card/merch/merchandiseCard";
import { Main } from "@/components/custom/MainComp";
import { Section, WrapperSection } from "@/components/custom/Section";

import merch from "@/data/merch.json";

const MerchandisePage = () => {
  return (
    <Main>
      <WrapperSection>
        <Section>
          <div className="flex w-full flex-wrap justify-around gap-4">
            {merch.map((merch) => {
              return (
                <div key={merch.id} className="basis-auto max-md:min-w-full">
                  <MerchandiseCard merch={merch} />
                </div>
              );
            })}
          </div>
        </Section>
      </WrapperSection>
    </Main>
  );
};
export default MerchandisePage;
