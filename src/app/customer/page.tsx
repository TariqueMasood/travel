"use client";

import { FormContext } from "@/context/form-context";
import { useContext, useEffect, useState } from "react";
import styles from "./customer.module.css";
import { FormData } from "@/@types/form";
import HeaderTitle from "@/components/header-title/header-title";
import { useRouter } from "next/navigation";

const Customer = () => {
  const context = useContext(FormContext);
  const [formDataArray, setFormDataArray] = useState<FormData[]>([]);

  if (!context) {
    throw new Error("DisplayPage must be used within a FormProvider");
  }

  const { loadFromLocalStorage, editFormData, deleteFormData } = context;
  const router = useRouter();

  useEffect(() => {
    const data = loadFromLocalStorage();
    setFormDataArray(data);
  }, [loadFromLocalStorage]);

  const handleEdit = (index: number) => {
    editFormData(index);
    router.push("/contact-us");
  };

  const handleDelete = (index: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this entry?"
    );
    if (confirmed) {
      deleteFormData(index);
      const updatedData = loadFromLocalStorage();
      setFormDataArray(updatedData);
    }
  };

  return (
    <div className={styles.customer}>
      <div className="container">
        <HeaderTitle
          styles={{ textAlign: "center" }}
          title="Customer"
          colorTitle="Details"
        />
        <div className={styles.tableWrappper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>#ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Type of Visa</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {formDataArray.length === 0 ? (
                <td colSpan={6} style={{ textAlign: "center" }}>
                  No data available
                </td>
              ) : (
                formDataArray.map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.visaType}</td>
                    <td>{data.message}</td>
                    <td>
                      <button type="button" onClick={() => handleEdit(index)}>
                        Edit
                      </button>
                      <button type="button" onClick={() => handleDelete(index)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customer;
