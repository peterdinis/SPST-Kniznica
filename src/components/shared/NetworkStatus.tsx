import useNetwork from "@/hooks/useNetwork";

const NetworkStatus: React.FC = () => {
  const isOnline = useNetwork();
  return (
    <div>
      <h1>My Awesome App</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
        provident tenetur molestias fugiat expedita quaerat dolores dignissimos
        dicta, error amet reiciendis voluptates delectus perspiciatis dolorum
        saepe, sunt, similique vitae illo.
      </p>
      {!isOnline && (
        <div className="toast">
          You are offline. Please check your connectivity and try again.
        </div>
      )}
    </div>
  );
};

export default NetworkStatus;
