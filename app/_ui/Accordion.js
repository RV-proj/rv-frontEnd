const Accordion = ({ question, answer }) => {
  return (
    <div>
      <div className="collapse collapse-arrow rounded-xl border border-white/10 bg-white/5 p-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold text-white">
          {question}
        </div>
        <div className="collapse-content text-sm mt-2 text-white/70">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
