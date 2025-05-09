import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { companyDetails } from "../../../globals/constants";
import axios from "axios";

const InquiryForm = ({ setLoading }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // handle form submit click
  const handleFormSubmit = async (values) => {
    // setLoading(true);
    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + values.phone + "\n\n";
    emailBody += "Message:\n" + values.message;


    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: "You have a new message - Paramind AI",
      name: "Paramind AI",
      body: emailBody,
    };

    try {
      const res = await axios.post(
        "https://send-mail-redirect-boostmysites.vercel.app/send-email",
        payload
      );
      if (res.data.success) {
        toast.success("Email sent successfully");
        navigate("/thank-you");
        reset();
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="clear comment-section-outer m-b50">
      <div className="comments-area" id="comments">
        <div className="comments-outer p-t80">
          <div className="comment-respond p-t50" id="respond">
            <h2 className="comment-reply-title m-b30" id="reply-title">
              Book An Appointment
            </h2>
            <p>
              Fill out the form below to get in touch with us. We look forward
              to hearing from you!
            </p>
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="comment-form row"
              id="commentform"
            >
              <p className="comment-form-author col-lg-6 col-md-6">
                <label htmlFor="author">Your Name</label>
                <input
                  className="form-control"
                  type="text"
                  defaultValue={""}
                  name="user-comment"
                  placeholder="Your Name"
                  id="author"
                  {...register("name", {
                    required: "Full name is required",
                    validate: (val) => {
                      if (val.trim() !== "") {
                        return true;
                      } else {
                        return "Full name is required";
                      }
                    },
                  })}
                />
                <small className="text-danger">{errors.name?.message}</small>
              </p>
              <p className="comment-form-email col-lg-6 col-md-6">
                <label htmlFor="url">Phone Number</label>
                <input
                  className="form-control"
                  type="text"
                  defaultValue={""}
                  name="url"
                  placeholder="Phone Number"
                  id="url"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\+?[0-9]{10,15}$/,
                      message: "Entered phone number is invalid",
                    },
                  })}
                />
                <small className="text-danger">{errors.phone?.message}</small>
              </p>
              <p className="comment-form-url col-lg-12 col-md-12">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control"
                  type="text"
                  defaultValue={""}
                  name="email"
                  placeholder="Your Email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Entered email is invalid",
                    },
                  })}
                />
                <small className="text-danger">{errors.email?.message}</small>
              </p>
              <p className="comment-form-comment col-lg-12 col-md-12">
                <label htmlFor="comment">Message</label>
                <textarea
                  className="form-control"
                  rows={8}
                  name="comment"
                  placeholder="Message"
                  id="comment"
                  defaultValue={""}
                  {...register("message", {
                    required: "Message is required",
                    validate: (val) => {
                      if (val.trim() !== "") {
                        return true;
                      } else {
                        return "Message is required";
                      }
                    },
                  })}
                />
                <small className="text-danger">{errors.message?.message}</small>
              </p>
              <p className="form-submit">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="site-button sx-btn-primary icon sx-btn-lg w-100 d-flex justify-content-center"
                >
                  <i className="fa  fa-long-arrow-right" />{" "}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
