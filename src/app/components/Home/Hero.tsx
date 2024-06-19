import Button from "../Elements/Button";

const Hero = () => {
  return (
    <section className="flex flex-col gap-4 py-12">
      <h1 className="text-4xl font-bold text-center">
        Find your next <br /> dream job
      </h1>

      <p className="text-center text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        similique eveniet delectus corporis ipsa laudantium facere quis. Autem,
        hic vel?
      </p>

      <form action="" className="pt-6">
        <div className="flex gap-3 justify-between w-2/3 mx-auto">
          <input
            type="search"
            name=""
            id=""
            className="border border-gray-400 rounded-md grow p-2 outline-none"
            placeholder="Search your desire job here ..."
          />
          <Button type="button" btnText="Search" btnClass="bg-green-600" />
        </div>
      </form>
    </section>
  );
};

export default Hero;
