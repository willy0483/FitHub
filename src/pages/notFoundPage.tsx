import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-background p-4 text-foreground">
      <div className="max-w-md space-y-4 text-center">
        <h1 className="text-5xl font-bold tracking-tight">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>

      <div className="flex gap-4">
        <Button
          variant="outline"
          onClick={() => navigate(-1)}
          className="border-primary text-primary hover:bg-primary/10"
        >
          Go Back
        </Button>
        <Button
          onClick={() => navigate("/home")}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Return Home
        </Button>
      </div>

      <div className="mt-8 text-sm text-muted-foreground">
        <p>Need help? Contact our support team.</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
