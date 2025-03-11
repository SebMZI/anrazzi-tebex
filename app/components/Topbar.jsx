import content from "@/app/_data/content.json";
const Topbar = () => {
  return (
    <div className="bg-ascent text-sm py-2 text-center">
      <p
        className="text-black"
        dangerouslySetInnerHTML={{ __html: content.topbar.html }}
      ></p>
    </div>
  );
};

export default Topbar;
