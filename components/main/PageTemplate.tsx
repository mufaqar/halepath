import React from "react";
import PageBanner from "../page-banner";

const PageTemplate = ({ data }: any) => {
  const page = data.data;
  console.log(data);
  return (
    <>
      <PageBanner title={page.title} />
      <section className="py-[60px]">
        <div className="hale_container flex md:flex-row flex-col gap-6">
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </div>
      </section>
    </>
  );
};

export default PageTemplate;
