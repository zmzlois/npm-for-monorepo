import { Button } from "../ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPage: number;
};

export const Pagination = ({ page, setPage, totalPage }: PaginationProps) => {
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const search = searchParams.get("result") ?? "";
  const pageParam = searchParams.get("page") ?? 0;

  const number = parseInt(pageParam as string);

  const router = useRouter();

  const handlePageChange = (page: number) => {
    const url = `${pathname}?result=${search}&page=${page}`;
    router.replace(url, { scroll: true });
    setPage(page);
  };

  return (
    <nav
      className="flex flex-1 justify-center gap-2 py-8 sm:gap-20"
      role="navigation"
      aria-label="pagination"
    >
      <Button
        className="pagination-previous"
        variant="outline"
        onClick={() => router.back()}
        disabled={page === 0}
      >
        Previous
      </Button>
      <Button
        variant="outline"
        className="pagination-next"
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPage}
      >
        Next page
      </Button>
    </nav>
  );
};
