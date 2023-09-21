export const Checkbox = ({handleOnlyEvenIDs, isEven}) => {
  return (
    <div>
      <input onChange={handleOnlyEvenIDs} checked={isEven} type="checkbox" />
      <label className="ml-2">Only Even</label>
    </div>
  );
};
